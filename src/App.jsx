import { Component } from "react";
import "./App.css";

export default class App extends Component {
  state = {
    name: "momentum"
  };

  render() {
    return (
      <div className="App">
        <h1>Welcome to {this.state.name} Josh</h1>
      </div>
    );
  }
}
