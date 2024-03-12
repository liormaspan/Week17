import React from "react"

class ErrorBoundary extends React.Component{
    constructor(){
        super();
        this.state={
            hasError:false,
        }
    }

    componentDidCatchS=(err,errInfo)=>{
        this.setState({hasError:true})
        console.log(err);
    }
    render(){
        if(this.state.hasError){
        return <h2>SORRY THATS AN ERROR</h2> 
        }
        return this.props.children
    }
        
}

export default ErrorBoundary;

