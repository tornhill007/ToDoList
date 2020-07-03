import React from 'react';
import {connect} from "react-redux";
import EditModal from "./EditModal";
import {
    closeModal,
    editTask
} from "../../../redux/reducers/todoListReducer";
import {getAllTasks} from "../../../redux/selectors/todoListSelectors";

let mapStateToProps = (state) => {
    return {
        tasks: getAllTasks(state),
    }
};


export default connect(mapStateToProps, {closeModal, editTask})(EditModal);