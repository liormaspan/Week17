import { useState } from "react";
const Form=(props)=>{
    const [fName,setFname]=useState("")
    const [lName,setlname]=useState("")
    const [color,setColor]=useState("")
    const [bool,setBool]=useState(false)
    const [text,setText]=useState("sdasd")
    const [input,setInput]=useState({});
    
  
    
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log("input",input);
        // console.log(input.lName);
        // console.log(input.color);
        // console.log(input.bool);
        // console.log(input.text);
        // let value=''
        // if(e.target.type==="checkedbox"){
        //     value=e.target.checked
        // }else{
        //     value=e.target.value
        // }
        // let key=e.target.name
        // let newInput={...input,[key]:value}
        // setInput(newInput)
    }

    const handleChange=(e)=>{
        const value=e.target.type==='checkbox'?e.target.checked:e.target.value
        setInput({...input[e.target.name],value})
    }
    return(
        <>
        <h2>form example</h2>
        <form onSubmit={(e)=>handleChange(e)}>
           First Name: <input name="fName" type="text" onChange={(e)=>handleChange(fName.target.value)}/><br></br>
           last Name: <input name="lName" type="text" onChange={(e)=>handleChange(lName.target.value)}/><br></br>
           <select name="color" onChange={(e)=>handleChange(color.target.value)}>
            <option value={"red"}>Red</option>
            <option value={"blue"}>Blue</option>
            <option value={"green"}>Green</option>
           </select>
           <br></br>
            yes/no:
            <input name="bool" type="checkbox" onChange={(e)=>handleChange(bool.target.checked)}/>
            <br></br>
            <textarea name="text" onChange={(e)=>handleChange(text.target.value)}></textarea>

            <input type="submit" value="submit" />
        </form>
        </>
    )
}
export default Form;