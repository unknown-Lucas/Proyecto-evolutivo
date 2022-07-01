import React from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';
import TaskComponent from '../pure/task';


const TaskListComponent = () => {
    
    const defaultTask = new Task('Prueba','Esto es una prueba.',false,LEVELS.NORMAL)
    
    const changeState = (id) => {
        
    }

    return (
        <div>
            <div>
            Your Task:
            </div>
            <TaskComponent task={defaultTask}></TaskComponent>
        </div>
    );
};


TaskListComponent.propTypes = {

};


export default TaskListComponent;
