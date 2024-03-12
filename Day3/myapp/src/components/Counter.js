import { useState } from "react";
const Counter =()=>{
    const[count,setCount]=useState(0)
    if(count>5){
        throw new Error("crashed")
    }
    return(
        <>
        <button onClick={()=>setCount(count+1)}>+</button>
        <h2>{count}</h2>
        </>
    )
}
export default Counter;