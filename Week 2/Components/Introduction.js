// how to pass data and state between Components
import React from "React";

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("Inside the constructor");
  }

  componentDidMount = () => {
    console.log("Inside component did mount");
  };

  render() {
    console.log("Inside render method");
    return <div>The component is rendered</div>;
  }
}

export default App;
