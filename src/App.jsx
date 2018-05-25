import { Component } from "react";
import render from "react-dom";
import "./App.css";
import { BrowserRouter, Router, Route, Redirect } from "react-router-dom";
import Layout from "./components/Layout";
import NavBar from "./components/navBar/NavBar";
import LoginMessage from "./components/loginMessage/LoginMessage";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileOpen: false
    };
  }

  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar
            handleDrawerToggle={this.handleDrawerToggle}
            mobileOpen={this.state.mobileOpen}
            loggedIn={this.state.loggedIn}
          />
          <Route
            path="/"
            render={props =>
              localStorage.getItem("loggedIn") === "true" ? (
                <Layout
                  {...props}
                  handleDrawerToggle={this.handleDrawerToggle}
                  mobileOpen={this.state.mobileOpen}
                />
              ) : (
                <Redirect to="/login" />
              )
            }
          />
          {/* <Route path="/login" component={Welcome} /> */}
        </div>
      </BrowserRouter>
    );
  }
}
