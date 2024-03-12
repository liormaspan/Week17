import React from "react";

class ErrorBoundery extends React.Component{
    constructor(){
        super()
        this.state={
            hasError:false,
        }
    }

    componentDidCatch=(error,errorInfo)=>{
        this.setState({hasError:true})
    }
    
    render(){
        if(this.state.hasError){
            return <h3>sorry</h3>
        }
        return this.props.children
    }
}

export default ErrorBoundery;