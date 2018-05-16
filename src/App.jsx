import { Component } from "react";
import render from "react-dom";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import NavBar from "./components/NavBar";
import MenuDrawer from "./components/MenuDrawer";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <MenuDrawer />
        </div>
      </Router>
    );
  }
}
