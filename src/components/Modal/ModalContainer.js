import React from 'react';
import {connect} from "react-redux";
import Modal from "./Modal";

let mapStateToProps = (state) => {
    return {
        todoListPage: state.todoListPage,
    }
};


export default connect(mapStateToProps, {})(Modal);