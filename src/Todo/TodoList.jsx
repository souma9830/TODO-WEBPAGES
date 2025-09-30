import { MdCheck, MdDeleteForever } from "react-icons/md";

export const TodoList=({data,onHandeldeleteTodo})=>{

    return(
          <li className="todo-item">
            <span>{data}</span>
      <button className="check-btn">
        <MdCheck />
      </button>
      <button className="delete-btn" onClick={() =>onHandeldeleteTodo(data)}>
        <MdDeleteForever/>
      </button>
    </li>
    );
}