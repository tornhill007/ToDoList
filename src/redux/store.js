import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'
import todoListReducer from "./reducers/todoListReducer";
import filtersReducer from "./reducers/filtersReducer";
import { save } from "redux-localstorage-simple"

let reducers = combineReducers({
    form: formReducer,
    todoListPage: todoListReducer,
    filtersPage: filtersReducer
});

//let store = createStore(reducers, applyMiddleware(thunkMiddleware));

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, /* preloadedState, */ composeEnhancers(
    applyMiddleware(save({namespace: "todoList"}))
));

export default store;