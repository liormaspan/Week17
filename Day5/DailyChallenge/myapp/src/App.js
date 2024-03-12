import './App.css';
import {useState,useEffect} from "react"

function App() {
  const[message,setMessage]=useState("")
  const[input,setInout]=useState("")
  const[submit,setSubmit]=useState("")

  useEffect(()=>{
    fetchMessage()
  },[])

  const fetchMessage=async()=>{
    const res=await fetch("http://localhost:3000/api/hello")
    const message=await res.text()
    setMessage(message)
  }
  
  const handleSubmit=async(e)=>{
    e.preventDefault()
    const response= await fetch("http://localhost:3000/api/world",{
      method:"post",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({value:input})
    })
    const data=await response.json()
    console.log(data);
    setSubmit(data)
    setInout("")
  }
  const handleChange=(e)=>{
    setInout(e.target.value)
  } 
  return (
    <div>
    <h1>{message}</h1>
    <h2>post to server</h2>    
    <form onSubmit={handleSubmit}>
      <input type='text' value={input} onChange={handleChange}/>
      <input type='submit' value="submit"/>
      <p>{submit}</p>
    </form>
    </div>

  );
}

export default App;
