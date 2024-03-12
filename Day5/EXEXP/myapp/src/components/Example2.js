import DataTwo from "./DataTwo.json"
const Example2=(props)=>{
    const skills=DataTwo.skills
    return(
        <div>
        <h2>Skills</h2>
        {skills.map((workSkills,index)=>
        <div key="index">
            <h3>{workSkills.Area}</h3>
            <ul>
                {workSkills.skills.map((skill,index)=>(
                    <li key="inx">
                    {skill.name}, {skill.hot?"know":"dont know"}
                    </li>
                ))}
            </ul>
        </div>
        )}
        </div>
    )
}

export default Example2;