import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./Todolist";

function App() {

    const[tasks1, setTasks1] =useState( [
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "ReactJS", isDone: false},
    ])

    const removeTask=(newId:number)=>{
        // удалить строчку, айди, которой пришла
        setTasks1(tasks1.filter(el=>el.id!==newId))
    }
    const TasksFilter=()=>
        console.log('filterValue')
    return (
        <div className="App">
            <Todolist title={'What to learn111'} task={tasks1} removeTask={removeTask}/>
        </div>
    );
}

export default App;
