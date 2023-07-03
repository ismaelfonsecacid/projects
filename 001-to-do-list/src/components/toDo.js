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
      <form className="flex items-center justify-center mb-4" onSubmit={handleSubmit}>
        <input type="text" className="border border-black p-1 mr-2" onChange={handleChange} value={newValue} />
        <button className=" bg-green-500 p-2 rounded-md text-white hover:bg-green-800" onClick={handleClick}>Update</button>
      </form>
    );
  }

  function ToDoElement() {
    return (
      <div className="flex items-center justify-center mb-4">
        <div className="mr-2 w-48 break-all border p-2">{item.title}</div>
        <button className="m-2 bg-blue-600 hover:bg-blue-800 p-2 rounded-md text-white" onClick={handleClick}>Edit</button>
        <button className=" m-2 p-2 bg-red-600 hover:bg-red-900 rounded-md text-white" onClick={() => onDelete(item.id)}>Delete</button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-start">
      {isEdit ? <FormEdit /> : <ToDoElement />}
    </div>
  );
}
