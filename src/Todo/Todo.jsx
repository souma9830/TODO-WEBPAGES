import { useState, useEffect } from "react";
import "./Todo.css"
import { MdDeleteForever } from "react-icons/md";
import { MdCheck } from "react-icons/md";

const Todo = () => {
  const [inputval, setval] = useState("");
  const [task, setTask] = useState([]);
  const [date, setTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const formattedDate = now.toLocaleDateString();
      const formatTime = now.toLocaleTimeString();
      setTime(`${formattedDate} - ${formatTime}`);
    }, 1000);

    return () => clearInterval(interval); 
  }, []);

  const handelInput = (val) => {
    setval(val);
  };

  const handelFormSubmit = (event) => {
    event.preventDefault();
    if (!inputval) return;
    if (task.includes(inputval)) {
      setval("");
      return;
    }
    setTask((prev) => [...prev, inputval]);
    setval("");
  };
  const handelDelete=(value)=>{
    const updatetask=task.filter((curTask)=> curTask!==value)
    setTask(updatetask);
     console.log(task);
    
  };
  const handelClear=()=>{
    setTask([]);
  }


  return (
    <section className="todo-container">
      <header>
        <h1>Todo List</h1>
        <h2 className="date-time">{date}</h2>
      </header>

      <section className="form">
        <form onSubmit={handelFormSubmit}>
          <div>
            <input
              type="text"
              className="todo-input"
              autoComplete="off"
              value={inputval}
              onChange={(event) => handelInput(event.target.value)}
            />
          </div>
          <div>
            <button type="submit" className="todo-button">Add Task</button>
          </div>
        </form>
      </section>

      <section className="myUnOrdList">
        <ul>
          {task.map((curTask, idx) => (
            <li key={idx} className="todo-item">
              <span>{curTask}</span>
              <button className="check-btn"><MdCheck /></button>
              <button className="delete-btn" onClick={()=>handelDelete(curTask)}><MdDeleteForever /></button>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <button className="clear-btn" onClick={handelClear}> Clear All</button>
      </section>
    </section>
  );
};

export default Todo;
