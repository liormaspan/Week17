import Data from "./Data"

const Postlist=(props)=>{
    return(
        <>
        {Data.map=((post)=>{
            <div key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.contect}</p>
            </div>
        })}
        </>
    )
}

export default Postlist;