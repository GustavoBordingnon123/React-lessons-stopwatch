import React, { useState } from 'react';
import Cronometro from '../components/cronometro';
import Form from '../components/Form';
import List from '../components/List';
import { Itask } from '../types/Itask';
import style from './App.module.scss';

function App() {
  const [tasks,setTasks] = useState<Itask[] | []>([]);
  const [selected, setSelected] = useState<Itask>();

  function selectTask(taskSelected: Itask){
    setSelected(taskSelected);
    setTasks(oldTasks => oldTasks.map(task => ({
      ...task,
      selected: task.id === taskSelected.id ? true : false
    })))
  }

  function endTask(){
    if(selected) {
      setSelected(undefined)
      setTasks(oldTasks => oldTasks.map(task => {
        if(task.id === selected.id){
          return {
            ...task,
            selected: false,
            full:true
          }
        }
        return task;
      }));
    }
  }

  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks}/>
      <List 
        tasks={tasks}
        selectTask = {selectTask}
      
      />
      <Cronometro 
        selected={selected} 
        endTask={endTask}
      />
    </div>
  );
}

export default App;
