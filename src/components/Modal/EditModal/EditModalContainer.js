import React from 'react';
import {connect} from "react-redux";
import EditModal from "./EditModal";
import {
    closeModal,
    editTask
} from "../../../redux/reducers/todoListReducer";

let mapStateToProps = (state) => {
    return {
        tasks: state.todoListPage.tasks,
    }
};


export default connect(mapStateToProps, {closeModal, editTask})(EditModal);