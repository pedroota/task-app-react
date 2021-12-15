import React from 'react';
import './Task.css'
import {CgClose} from 'react-icons/cg'

const Task = ({ task, handleTaskClick, handleTaskDeletion }) => {
    return (
        <div className='task-container' style={task.completed ? {borderLeft: '6px solid chartreuse', transition: '0.1s'} : {}}>

            <div onClick={() => {handleTaskClick(task.id)}} className="task-title">
                <p>{task.title}</p>
            </div>

            <div className="buttons-container">
                <button className="remove-task-button" onClick={() => {handleTaskDeletion(task.id)}}>

                    <CgClose />
                </button>
            </div>
        </div>
    );
}
 
export default Task;