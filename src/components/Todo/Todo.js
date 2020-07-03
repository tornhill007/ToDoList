import React from 'react';
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import style from "./Todo.module.css"
import TodoList from "../TodoList/TodoList";
import {
    addNewTask,
    completeTask,
    deleteTask,
    loadState,
    openModal
} from "../../redux/reducers/todoListReducer";
import {uuid} from 'uuidv4';
import {changeFilter} from "../../redux/reducers/filtersReducer";
import Header from "../Footer/Header";
import TodoForm from "../TodoForm/TodoForm";
import {NavLink} from "react-router-dom";
import {getAllTasks, getCurrentFilter} from "../../redux/selectors/todoListSelectors";


const ReduxTodoForm = reduxForm({
    form: 'todoInput'
})(TodoForm);

class Todo extends React.Component {

    componentDidMount() {
        const state = JSON.parse(window.localStorage.getItem("savedState"));
        console.log(state);
        if (state) {
            this.props.loadState(state.tasks);
        }
    }

    addNewTask = (id, text, isCompleted, creatingDate) => {
        this.props.addNewTask(id, text, isCompleted, creatingDate)
    };
    // state = {
    //     taskText: ''
    // };
    //
    // handleInputChange = ({target: {value}}) => {
    //     this.setState({
    //         taskText: value
    //     })
    // };

    filterTasks = (tasks, activeFilter) => {
        switch (activeFilter) {
            case 'active':
                return tasks.filter(task => !task.isCompleted)
                break;
            case 'completed':
                return tasks.filter(task => task.isCompleted)
                break;
            default:
                return tasks;
        }
    };

    onSubmit = (formData) => {
        console.log(formData);
        this.addNewTask(uuid(), formData.todoData, false, new Date().toLocaleString());
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        const state = {
            tasks: this.props.tasks
        };
        window.localStorage.setItem("savedState", JSON.stringify(state));
    }

    render() {

        const filteredTasks = this.filterTasks(this.props.tasks, this.props.currentFilter);

        return (
            <div className={style.container}>
                {/*{console.log(this.state.taskText)}*/}
                {/*<input type="text" onChange={this.handleInputChange} value={this.state.taskText}/>*/}
                <h1 className={style.header}>TodoList</h1>
                <ReduxTodoForm onSubmit={this.onSubmit}/>
                <h2>Filters</h2>
                <Header changeFilter={this.props.changeFilter} currentFilter={this.props.currentFilter}/>
                <TodoList tasks={filteredTasks} deleteTask={this.props.deleteTask}
                          completeTask={this.props.completeTask} openModal={this.props.openModal}/>
                <div className={style.infoWrap}><NavLink className={style.infoItem} to="/info">Info about this page</NavLink></div>
            </div>
        )
    }
};

const mapStateToProps = (state) => ({
    tasks: getAllTasks(state),
    currentFilter: getCurrentFilter(state)
});

export default connect(mapStateToProps, {
    addNewTask,
    deleteTask,
    completeTask,
    changeFilter,
    loadState,
    openModal
})(Todo);
