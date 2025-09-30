import { useState } from "react";
import "./Todo.css";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoDate } from "./TodoDate";

const Todo = () => {
  const [task, setTask] = useState([]);

  // Handle adding new todo
  const handelFormSubmit = (inputval) => {
    const { id, content, checked } = inputval;
    if (!content) return;

    const ifTodoMatch = task.find((curTask) => curTask.content === content);
    if (ifTodoMatch) return;

    setTask((prev) => [...prev, { id, content, checked }]);
  };

  // Handle deleting a todo
  const handelDelete = (value) => {
    const updatetask = task.filter((curTask) => curTask.content !== value);
    setTask(updatetask);
  };

  const handelClear = () => {
    setTask([]);
  };

  
  const onHandelCheck = (content) => {
    const updateTask = task.map((curTask) => {
      if (curTask.content === content) {
        return { ...curTask, checked: !curTask.checked };
      } else {
        return curTask;
      }
    });
    setTask(updateTask);
  };

  return (
    <section className="todo-container">
      <header>
        <h1>Todo List</h1>
        <TodoDate />
      </header>

      <TodoForm onAddTodo={handelFormSubmit} />

      <section className="myUnOrdList">
        <ul>
          {task.map((curTask) => (
            <TodoList
              key={curTask.id}
              data={curTask.content}
              onHandeldeleteTodo={handelDelete}
              checked={curTask.checked}
              onHandelCheck={onHandelCheck}
            />
          ))}
        </ul>
      </section>

      <section>
        <button className="clear-btn" onClick={handelClear}>
          Clear All
        </button>
      </section>
    </section>
  );
};

export default Todo;
