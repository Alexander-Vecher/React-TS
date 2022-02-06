let task = [
    {id: 1, title: "HTML&CSS", is: true},
    {id: 2, title: "JS", is: true },
    {id: 3, title: "ReactJS", is: false}
]
function remuve (id:number) {
    task= task.filter((t)=> t.id !== id
    )

}

return (
    <div className="App">
        <Todolist title={"qqq"} task={task} remuve={remuve}/>
    </div>);

}

export default App;