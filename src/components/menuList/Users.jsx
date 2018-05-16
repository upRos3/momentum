import { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import User from "./User";

export default class Users extends Component {
  state = {
    users: []
  };

  componentWillMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => this.setState({ users: data }));
  }

  render() {
    const userList = this.state.users.map(user => {
      return <User username={user.username} key={user.id} />;
    });
    return <div>{userList}</div>;
  }
}
