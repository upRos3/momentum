import { Component } from "react";
import render from "react-dom";
import "./App.css";
import NavBar from "./components/NavBar";

export default class App extends Component {
  state = {
    name: "momentum"
  };

  render() {
    return (
      <div className="App">
        <NavBar />
        <h1>Welcome to {this.state.name} Josh</h1>
      </div>
    );
  }
}
