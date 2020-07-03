import React from 'react';
import {NavLink} from "react-router-dom";
import style from "./Info.module.css"

const Info = (props) => {
  return (
      <div>
          <div>
              <h1><NavLink to={"/"}>Back to list</NavLink></h1>
          </div>
          <div className={style.wrapText}>
              <p>---> This page is designed in order to create your daily and not only tasks.</p>
              <p>---> The functionality of the page is quite simple. Let's get to know this better.</p>
              <p>---> To create a new task, enter it in the field at the top, then click the Add task button on the right or press the Enter key on the keyboard.
                  After creating a task, it will appear in the list below the input field.
                  By default, the created task is active.</p>
              <p>---> Opposite each created task we can see the date of its creation.
                  To mark a task as completed, you need to click on the Checkbox icon to the left of the task text. To mark a task as active, you need to click on the Checkbox icon again.</p>
              <p>---> To delete an entry you need to click on the red cross icon to the right of the task text.</p>
              <p>---> You can also edit the created task by clicking the gear icon which is also on the right side. After you click on the gear, a modal window will appear where we can edit the text of the created task.</p>
              <p>---> Also there is a filter on this page that filters our records depending on the selected filter.</p>
              <p>---> Validation is also present in the input field.
                  The field is required, so we will not be able to create an entry with an empty field. The field also has a limit on the number of characters to enter. Currently the number of characters = 30.</p>
          </div>
      </div>

  )
};

export default Info;