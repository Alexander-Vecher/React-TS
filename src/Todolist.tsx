import React from "react";

type TodolistPropsType = {
    title: string,
    task: Array<TaskPropsType>
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
            {props.task.map((el) => {

                return (
                    <li><input type="checkbox" checked={el.isDone}/> <span>{el.title}</span></li>
                )
            })}
            {/*<ul>
                <li><input type="checkbox" checked={props.task[0].isDone}/> <span>{props.task[0].title}</span></li>
                <li><input type="checkbox" checked={props.task[1].isDone}/> <span>{props.task[1].title}</span></li>
                <li><input type="checkbox" checked={props.task[2].isDone}/> <span>{props.task[2].title}</span></li>
            </ul>*/}
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    )
}
