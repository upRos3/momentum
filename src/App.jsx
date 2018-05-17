import { Component } from "react";
import render from "react-dom";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Main from "./components/Main";
import Profile from "./components/userProfile/Profile";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" component={Main} />
          <Route path="/user/:id" component={Profile} />
        </div>
      </Router>
    );
  }
}
