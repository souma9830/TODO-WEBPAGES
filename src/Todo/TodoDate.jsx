import { useEffect, useState } from "react";

export const TodoDate=()=>{
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
    return(
        <h2 className="date-time">{date}</h2>
    )
}