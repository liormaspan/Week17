import {useState} from "react"
const EventEcample=(props)=>{
    const [count,setCount]=useState(0)
    const[message,setMessage]=useState("hello")
    const[bgColor,setBgcolor]=useState()
    const{countApp,setCountApp}=props

    const add=()=>{
        setCount(count+1)
    }
    return(
        <div style={{backgroundColor:bgColor}} onMouseEnter={()=>setBgcolor("yellow")}>

            <h3>event example</h3>
            <button onClick={()=>setCount(count+1)}>+</button>
            <button onClick={()=>add(count+1)}>+</button>
            <input onChange={(e)=>setMessage(e.target.value)}/>
            <button onClick={()=>setCountApp(countApp+1)}>add one from app</button>
            <h3>{message}</h3>
        </div>
    )
}
export default EventEcample;