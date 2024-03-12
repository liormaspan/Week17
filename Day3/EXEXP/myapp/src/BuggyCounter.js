import { useState } from "react"

const BoundreyCounter=()=>{
const[count,setCount]=useState(0)

const handleClick=()=>{
  setCount(count+1)
}

if(count>5){
    throw new Error("OHHH NO CRASHED!!!")
}
    return(
        <>
        <div>
            <h1 onClick={handleClick}>{count}</h1>
        </div>
        </>
    )
}
export default BoundreyCounter;