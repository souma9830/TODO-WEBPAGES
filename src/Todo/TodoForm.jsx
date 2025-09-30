import { useState } from "react";

export const TodoForm=({onAddTodo})=>{
    const [inputval, setval] = useState("");
    const handelInput = (val) => {
    setval(val);
    };
    const handelFormSubmit=(event)=>{
         event.preventDefault();
         onAddTodo(inputval);
          setval("");
    }
    return(
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
        
    )
}