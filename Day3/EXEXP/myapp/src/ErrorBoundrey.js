import React from "react";

class ErrorBoundrey extends React.Component{
    constructor(){
        super()
        this.state={
            e:null,
            eInfo:null,
            hasError:false,
        }
        this.componentDidCatch=(e,eInfo)=>{
            this.setState({e:e,eInfo:eInfo,hasError:true})
            console.log(e);
        }
    }
    render(){
        if(this.state.hasError){
            return(
                <details style={{ whiteSpace: 'pre-wrap' }}>
                {this.state.hasError && this.state.error.toString()}
                <br/>
                {this.state.eInfo.componentStack}
                </details>
            )

        }
        return this.props.children
    }
}

export default ErrorBoundrey;