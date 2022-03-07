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
            {/*<ul>
                <li><input type="checkbox" checked={props.task[0].isDone}/> <span>{props.task[0].title}</span></li>
                <li><input type="checkbox" checked={props.task[1].isDone}/> <span>{props.task[1].title}</span></li>
                <li><input type="checkbox" checked={props.task[2].isDone}/> <span>{props.task[2].title}</span></li>
            </ul>*/}
            <div>
                <button onClick={()=>props.Value('All')}>All</button>
                <button onClick={()=>props.Value('Active')}>Active</button>
                <button onClick={()=>props.Value('Completed')}>Completed</button>
            </div>
        </div>
    )
}
