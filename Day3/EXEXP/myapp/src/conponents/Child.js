import React from "react";

class Child extends React.Component {
  constructor() {
    super();
  }

  componentWillUnmount() {
    alert("The component named header is about to be Unmounted");
  }

  render() {
    return (
      <>
        <h1>Hello World!!</h1>
      </>
    );
  }
}

export default Child;