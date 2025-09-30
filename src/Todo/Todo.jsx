import { useState} from "react";
import "./Todo.css"
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoDate } from "./TodoDate";

const Todo = () => {
  const [task, setTask] = useState([]);
  const handelFormSubmit = (inputval) => {
    const {id, content, checked}=inputval;
    if (!content) return;
    const ifTodoMatch= task.find((curTask)=>{
      curTask.content===content;
    })
    if(ifTodoMatch) return;
    setTask((prev) => [...prev, {id,content,checked}]);
   
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
              key={index.id} 
              data={curTask.content} 
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