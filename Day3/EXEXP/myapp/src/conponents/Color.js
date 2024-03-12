import React from "react";
import Child from "./Child";


class Color extends React.Component{
    constructor(){
        super()
        this.state={
            favoriteColor:"Red",
            display:true,
        }
    }

    shouldComponentUpdate(){
        return true;
    }

    componentDidMount(){
        setTimeout(()=>{
            this.setState({favoriteColor:"Yellow"})
            alert("OKK")
        },2000)
    }

    componentDidUpdate(){
        console.log("update after 2 second");
    }

    getSnapshotBeforeUpdate() {
        console.log("In getSnapshotBeforeUpdate ");
      }

      changeColor = () => {
        this.setState({ favoriteColor: "blue" });
      };
    
      removeHeader = () => {
        this.setState({ show: false });
      };
    
      render() {
        if (this.state.show === true) {
          return (
            <>
              <Child/>
              <button onClick={this.removeHeader}>Delete Header</button>
    
              <h1>My favorite Color is: {this.state.favoriteColor}</h1>
              <button onClick={this.changeColor}>Change Color</button>
            </>
          );
        } else {
          return null;
        }
      }
}

export default Color;