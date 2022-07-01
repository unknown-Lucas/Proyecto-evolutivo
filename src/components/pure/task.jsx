import React from "react";
import PropTypes from "prop-types";
import { Task } from "../../models/task.class";

const TaskComponent = ({ task , changeState}) => {
  return (
    <div>
      <h2> {task.name} </h2>
      <p> {task.description} </p>
      <p> level: {task.level}</p>
      <h3> this tag is: {task.completed ? "Completed" : "Pending"} </h3>
    </div>
  );
};

TaskComponent.propTypes = {
  task: PropTypes.instanceOf(Task),
};

export default TaskComponent;
