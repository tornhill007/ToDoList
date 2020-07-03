import React from 'react';
import {connect} from "react-redux";
import Modal from "./Modal";
import {getWholeTodoListPage} from "../../redux/selectors/todoListSelectors";

let mapStateToProps = (state) => {
    return {
        todoListPage: getWholeTodoListPage(state),
    }
};


export default connect(mapStateToProps, {})(Modal);