import { useState } from "react"
import ToDo from "./toDo";
export default function TodoApp() {
    const [title, setTitle] = useState('');
    const [toDo, setToDo] = useState([]);

    function handleChange(e) {

        e.preventDefault();
        setTitle(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        const newToDo = {
            id: crypto.randomUUID(),
            title: title,
            completed: false
        }
        setToDo([...toDo, newToDo]);  //copy from existing todo list to avoid duplicates in future and add new todo list
        setTitle("");
    }

    function handleUpdate (id,value){
        const temp = [...toDo] // copy array
        const item =  temp.find(item => item.id === id); //find the item with the given id
        item.title = value; //save the value
        setToDo(temp) //set the new array to the current one and update the existing one with the new value
    }

    function handleDelete (id) {
        const temp = toDo.filter(item => item.id !== id)
        setToDo(temp);
    }
    return (
        <div className="todoContainer">
            <form action="">
                <input className="todoInput" onChange={handleChange} value={title}/>
                <input
                    onClick={handleSubmit}
                    className="buttonCreate"
                    type="submit"
                    value="Create To Do" />
            </form>

            <div className="todDoContainer">
                {
                    toDo.map(item => (
                       <ToDo key={item.id} item={item} onUpdate={handleUpdate} onDelete={handleDelete}/>
                    ))
                }
            </div>
        </div>
    );
}