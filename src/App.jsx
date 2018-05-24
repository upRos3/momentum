import { Component } from "react";
import render from "react-dom";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./components/Layout";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" component={Layout} />
        </div>
      </Router>
    );
  }
}
