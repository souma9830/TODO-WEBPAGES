import { MdCheck, MdDeleteForever } from "react-icons/md";

export const TodoList = ({ data, checked, onHandelCheck, onHandeldeleteTodo }) => {
  
  return (
    <li className="todo-item">
      <span className={checked ? "checkList" : "notCheckList"}>{data}</span>

      <button className="check-btn" onClick={() => onHandelCheck(data)}>
        <MdCheck />
      </button>

      <button className="delete-btn" onClick={() => onHandeldeleteTodo(data)}>
        <MdDeleteForever />
      </button>
    </li>
  );
};
