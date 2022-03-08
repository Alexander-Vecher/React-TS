import React from "react";

type TodolistPropsType = {
    title: string,
    task: Array<TaskPropsType>
    removeTask:(id:number)=>void
    TasksFilter:(string)=>void
}

type TaskPropsType = {
    id: number,
    title: string,
    isDone: boolean
}

export let Todolist = (props: TodolistPropsType) => {
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            {props.task.map((el, index) => {

                return (
                    <li key={el.id}>
                        <button onClick={()=>props.removeTask(el.id)}>X</button>


                        <input type="checkbox" checked={el.isDone}/> <span>{el.title}</span></li>
                )
            })}
            <div>
                <button onClick={()=>props.Value('All')}>All</button>
                <button onClick={()=>props.Value('Active')}>Active</button>
                <button onClick={()=>props.Value('Completed')}>Completed</button>
            </div>
        </div>
    )
}
