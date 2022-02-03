

type PropsType= {
    title: string
    tasks: Array<TaskType>
}
type TaskType= {
    id:number
    title: string
    is: boolean
}

export function Todolist(props: PropsType) {
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
        
            </div>
            <ul>
                {props.tasks.map((m, index)=>{
                 return (<li key={index}><input type="checkbox" checked={m.is}/> <span>{m.title}</span></li>)})}
                {/*<li><input type="checkbox" checked={props.tasks[0].is}/> <span>{props.tasks[0].title}</span></li>
                <li><input type="checkbox" checked={props.tasks[1].is}/> <span>{props.tasks[1].title}</span></li>
                <li><input type="checkbox" checked={props.tasks[2].is}/> <span>{props.tasks[2].title}</span></li>*/}
            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    )

}