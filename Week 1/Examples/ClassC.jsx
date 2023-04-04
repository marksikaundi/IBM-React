import React from "react";

class App extends React.Component{
    constructor(props) {
        super(props)
    }

    // override the render method
    render() {
        return<button onClick={this.props.clickEvent}>Click Me!</button>
    }
}