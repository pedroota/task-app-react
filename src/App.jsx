import React, { useState } from 'react';
import {v4 as uuidv4} from 'uuid';


import AddTask from './components/AddTask/AddTask';
import Tasks from './components/Tasks';

import './App.css';

const App = () => {
  const [tasks, setTask] = useState([
    {
      id: "1",
      title: "Estudar programação",
      completed: false,
    },

    {
      id: "2",
      title: "Ler Livros",
      completed: true,
    }
  ]);

  const handleTaskClick = (taskId) => {
    const newTask = tasks.map(task => {
      if (task.id === taskId) return {...task, completed: !task.completed}

      return task
    })

    setTask(newTask)
  }

  const handleTaskAddition = (taskTitle) => {
    const newTask = [...tasks, {
      title: taskTitle,
      id: uuidv4(),
      completed: false,
    }]

    setTask(newTask)
  }

  const handleTaskDeletion = (taskId) => {
    const newTasks = tasks.filter(task => task.id !== taskId)

    setTask(newTasks)
  }

  return(
    <div className='content'>
      <h1 style={{color: '#eee'}}>Minhas Tarefas</h1>
      <AddTask handleTaskAddition={handleTaskAddition}/>
      <Tasks tasks={tasks} handleTaskClick={handleTaskClick} handleTaskDeletion={handleTaskDeletion}/>
    </div>
  );
}

export default App;