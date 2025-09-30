const Todokey="Reactstore";
export const getLocalStorage=()=>{
   const rawTodo=localStorage.getItem(Todokey);
    if(!rawTodo) return [];
    return JSON.parse(rawTodo);
}
export const setlocalStorageData=(task)=>{
      return localStorage.setItem(Todokey,JSON.stringify(task));
}