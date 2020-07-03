import {load} from "redux-localstorage-simple"

const EDIT_TASK = 'EDIT_TASK';
const LOAD_STATE = 'LOAD_STATE';
const OPEN_MODAL = 'OPEN_MODAL';
const DELETE_TASK = 'DELETE_TASK';
const COMPLETE_TASK = 'COMPLETE_TASK';
const CLOSE_MODAL = 'CLOSE_MODAL';
const ADD_NEW_TASK = 'ADD_NEW_TASK';

let initState1 = load({namespace: "todoList"})
let {tasks} = initState1.todoListPage ?? [];

const initState = {
    tasks: tasks ?? [],
    comments: [],
    isOpen: false,
    content: null
};

const todoListReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_NEW_TASK: {
            return {
                ...state,
                tasks: [...state.tasks, action.data]
            }
        }
        case DELETE_TASK: {
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.id)
            }
        }
        case COMPLETE_TASK: {
            return {
                ...state,
                tasks: state.tasks.map(task => {
                    if (task.id === action.id) {
                        task.isCompleted = !task.isCompleted;
                    }
                    return task;
                })
            }
        }
        case LOAD_STATE:
            return {
                ...state,
                tasks: action.state
            };
        case OPEN_MODAL:
            return {
                ...state,
                isOpen: true,
                content: action.content
            };
        case CLOSE_MODAL:
            return {
                ...state,
                isOpen: false
            };
        case EDIT_TASK:
            const index = state.tasks.findIndex(item => {
                return (item.id === action.id);
            });
            state.tasks[index].text = action.text;
            return {
                ...state,
                tasks: [...state.tasks]
            };
        default:
            return state
    }
}

export const addNewTask = (id, text, isCompleted, creatingDate) => ({type: ADD_NEW_TASK, data: {id, text, isCompleted, creatingDate}})
export const deleteTask = (id) => ({type: DELETE_TASK, id});
export const completeTask = (id) => ({type: COMPLETE_TASK, id});
export const loadState = (state) => ({type: LOAD_STATE, state});
export const openModal = (content) => ({type: OPEN_MODAL, content});
export const closeModal = () => ({type: CLOSE_MODAL});
export const editTask = (id, text) => ({type: EDIT_TASK, id, text});


export default todoListReducer;