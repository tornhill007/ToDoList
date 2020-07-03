import {Field} from "redux-form";
import {Input} from "../common/FormsControl/FormsControls";
import {maxLength, required} from "../../utils/validators/validators";
import classes from "../common/FormsControl/FormsControls.module.css";
import style from "./TodoForm.module.css";
import React from "react";

const maxLength30 = maxLength(30);

const TodoForm = (props) => {

    return <form onSubmit={props.handleSubmit}>
        <div className={style.wrap}>
        <div>
            <Field className={style.input} size={'75'} name={"todoData"} component={Input} placeholder={"todo"} validate={[required, maxLength30]}/>
        </div>
        {props.error && <div className={classes.formError}>{props.error}</div>}
        <div className={style.btnWrap}>
            <button className={style.btn}>
                Add task
            </button>
        </div>
        </div>
    </form>
};

export default TodoForm;