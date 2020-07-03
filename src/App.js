import React from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./redux/store";
import TodoList from "./components/Todo/Todo";
import Info from "./components/Info/Info";

function App() {
    return (
        <div className={"container1"}>
        <BrowserRouter>
            <Provider store={store}>
                <Route exact path='/' render={() => <TodoList/>}/>
                <Route path='/info' render={() => <Info/>}/>
            </Provider>
        </BrowserRouter>
        </div>
    );
}

export default App;
