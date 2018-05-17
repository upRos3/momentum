import { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Profile from "./userProfile/Profile";

export default class WelcomePage extends Component {
  render() {
    return <Profile />;
  }
}
