import { useState} from "react";
import "./Todo.css"
import { MdDeleteForever } from "react-icons/md";
import { MdCheck } from "react-icons/md";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoDate } from "./TodoDate";

const Todo = () => {
  const [task, setTask] = useState([]);
  const handelFormSubmit = (inputval) => {
   
    if (!inputval) return;
    if (task.includes(inputval))  return;
    setTask((prev) => [...prev, inputval]);
   
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
        <TodoDate />
      </header>

     <TodoForm  onAddTodo={handelFormSubmit}/>
    <section className="myUnOrdList">
        <ul>
        {task.map((curTask, index) => {
  return (
    <TodoList 
      key={index} 
      data={curTask} 
      onHandeldeleteTodo={handelDelete} 
    />
  );
})}

        </ul>
      </section>
      <section>
        <button className="clear-btn" onClick={handelClear}> Clear All</button>
      </section>
    </section>
  );
};

export default Todo;