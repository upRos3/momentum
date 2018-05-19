import { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import User from "./User";
import Lodash from "lodash";

export default class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usersInfo: [],
      usersAvatar: []
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => this.setState({ usersInfo: data }));

    fetch("https://randomuser.me/api/?results=10")
      .then(res => res.json())
      .then(data =>
        data.results.map(incomingAvatar => {
          this.setState(prevState => ({
            usersAvatar: [
              ...prevState.usersAvatar,
              incomingAvatar.picture.thumbnail
            ]
          }));
        })
      );
  }

  render() {
    // Lodash 'zips' the two arrays togeather to allow for mapping of state.
    const user = _.zip(this.state.usersInfo, this.state.usersAvatar).map(
      user => {
        return (
          <User
            username={user[0].username}
            key={user[0].id}
            id={user[0].id}
            userAvatar={user[1]}
          />
        );
      }
    );
    return <div>{user}</div>;
  }
}
