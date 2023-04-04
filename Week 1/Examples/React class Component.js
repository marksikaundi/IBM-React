import React from "react";
class App extends React.Component {
constructor(props) {
super(props);
this.state={change: true };
}
render() {
return(
<button Click={()=>{this.setState({change: !this.state.change});}}>Click Here!</button>
{this.state.change?(Hello!!):(Welcome to the React Course)});}}
export default App;