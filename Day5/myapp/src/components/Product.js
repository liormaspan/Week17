import { useParams } from "react-router-dom";
const Product =(props)=>{
    const params=useParams()
    console.log(params);
    return(
        <>
        <h2>Product Name: {params.name}</h2>
        <h2>Product Id: {params.id}</h2>
        </>
    )
}

export default Product;