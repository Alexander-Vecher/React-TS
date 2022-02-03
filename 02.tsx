function App() {

    const task1 = [
        { id: 1, title: "HTML&CSS", is: true},
        {id: 2, title: "JS", is: true },
        {id: 3, title: "ReactJS", is: false}
    ]
    const task2 = [
            { id: 1, title: "Hello world", is: true},
            {id: 2, title: "I am Happy", is: false },
            {id: 3, title: "Yo", is: false}
        ]
    return (
        <div className="App">
            <Todolist title={"qqq"} task={task1}/>
            <Todolist title={"www"} task={task2}/>
        </div>);

}