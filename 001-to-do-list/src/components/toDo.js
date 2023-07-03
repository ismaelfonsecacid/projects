import { useState } from "react";

// Retrieve the item values and a function
export default function ToDo({ item, onUpdate, onDelete }) {  
    const [isEdit, setIsEdit] = useState(false);

    // Set isEdit state to true
    function handleClick() {
        setIsEdit(true);
    }

    // New microComponent
    function FormEdit() {
        const [newValue, setNewValue] = useState(item.title); // Set new value

        function handleSubmit(e) {
            e.preventDefault();
        }

        // Set the input value as the new state
        function handleChange(e) {
            e.preventDefault();
            const value = e.target.value;
            setNewValue(value);
        }

        // Call the function passed as prop onUpdate
        function handleClick() {
            onUpdate(item.id, newValue);
            setIsEdit(false);
        }

        return (
            <form className="todoUpdate" onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} value={newValue}/>
                <button onClick={handleClick}>Update</button>
            </form>
        );
    }

    function ToDoElement() {
        return (
            <div className="toDoInfo">
                {item.title}
                <button onClick={handleClick}>Edit</button>
                <button onClick={(e)=>onDelete(item.id)}>Delete</button>
            </div>
        );
    }

    return (
        <div className="toDo">
            {isEdit ? <FormEdit /> : <ToDoElement />}
        </div>
    );
}
