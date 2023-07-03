import { useState } from "react";
import ToDo from "./toDo";

export default function TodoApp() {
  const [title, setTitle] = useState("");
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
    };
    setToDo([...toDo, newToDo]);
    setTitle("");
  }

  function handleUpdate(id, value) {
    const temp = [...toDo];
    const item = temp.find((item) => item.id === id);
    item.title = value;
    setToDo(temp);
  }

  function handleDelete(id) {
    const temp = toDo.filter((item) => item.id !== id);
    setToDo(temp);
  }

  return (
    <div className="flex flex-col items-center justify-start mt-4">
      <form action="" className="mb-4">
        <input
          className="border border-black p-1"
          onChange={handleChange}
          value={title}
        />
        <input
          onClick={handleSubmit}
          className="m-2 border  p-2 rounded-md bg-gray-300 hover:bg-gray-500"
          type="submit"
          value="Create To Do"
        />
      </form>

      <div className="">
        {toDo.map((item) => (
          <ToDo
            key={item.id}
            item={item}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}
