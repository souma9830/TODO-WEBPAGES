import { useState } from "react"
import { IoIosSwitch } from "react-icons/io";
import "./Toggle.css"
const Toogleswitch=()=>{
const[isOn,setOn]=useState(false);
const handelButton=()=>{
    setOn(!isOn);
}
return(
    <>
        <h1>Toogle Switch <IoIosSwitch /></h1>
        <div className="toggle-switch" onClick={handelButton}>
            <div className={`switch ${isOn?"on":"off"}`} >
                <span className="switch-state">
                    {isOn?"ON":"OFF"}
                </span>
            </div>
        </div>
    </>
)
} 
export default Toogleswitch;