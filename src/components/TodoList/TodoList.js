import React from 'react';
import EditModalContainer from "../Modal/EditModal/EditModalContainer";
import ModalContainer from "../Modal/ModalContainer";
import style from "./TodoList.module.css";
import checkbox from "../../assets/images/checkbox.png"

const TodoList = (props) => {

   const edit = (id, text) => {
        props.openModal(<EditModalContainer id={id} text={text}/>);
    };


    return (
        <div>
            {console.log(props)}
            <ModalContainer/>
            {props.tasks.map(task => <div className={`${style.wrapper} ${task.isCompleted && style.completed}`}>
                {task.isCompleted ? <i onClick={() => {props.completeTask(task.id)}} className={`fa fa-check-square fa-3x` + ` ${style.icon1}`} aria-hidden="true"></i> : <img onClick={() => {props.completeTask(task.id)}} className={`${style.img} ${style.icon1}`} src={checkbox} alt="checkbox"/> }

                {/*<button onClick={() => {props.completeTask(task.id)}}>complete</button>*/}
                <span className={`${task.isCompleted && style.lineThrough} ${style.item}`}>{task.text}</span>
                <span className={style.creatingDate}>created: {task.creatingDate}</span>
                <i className="fa fa-square-o fa-3x" aria-hidden="true"></i>
                <i onClick={() => {props.deleteTask(task.id)}} className={`fa fa-times fa-3x` + ` ${style.icon}`} aria-hidden="true"></i>
                <i onClick={() => {
                    edit(task.id, task.text)
                }} className={`fa fa-cogs fa-3x` + ` ${style.icon1}`} aria-hidden="true"></i>
                {/*<i onClick={() => {props.completeTask(task.id)}} className={"fa fa-spinner fa-pulse fa-3x" + ` ${style.icon1}`} aria-hidden="true"></i>*/}
            </div>)}
        </div>
    )
};

export default TodoList