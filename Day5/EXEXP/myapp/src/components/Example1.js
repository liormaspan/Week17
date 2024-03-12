import DataTwo from "./DataTwo.json"
const Example1=(props)=>{
    const SocialMedias=DataTwo.SocialMedias
    return(
        <>
        <h2>Social Medias</h2>
        {SocialMedias.map((item,index)=>
        <ul key="index">
            <li>{item}</li>
        </ul>
        )}
        </>
    )
}

export default Example1;