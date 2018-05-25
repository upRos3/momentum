import { Component } from "react";
import render from "react-dom";
import "./App.css";
import Layout from "./components/Layout";
import NavBar from "./components/navBar/NavBar";

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
      <div className="App">
        <NavBar
          handleDrawerToggle={this.handleDrawerToggle}
          mobileOpen={this.state.mobileOpen}
          loggedIn={this.state.loggedIn}
        />
        <Layout />
      </div>
    );
  }
}
