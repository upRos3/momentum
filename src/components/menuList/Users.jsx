import { Component } from "react";
import ReactDOM from "react-dom";
import User from "./User";
import axios from "axios";
import Lodash from "lodash";
import typicodeApiGET from "../../helperFunctions/typicodeGet.js";

export default class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usersInfo: [],
      usersAvatar: []
    };
  }

  componentDidMount() {
    typicodeApiGET("users").then(res => {
      this.setState({ usersInfo: res });
    });

    axios.get("https://randomuser.me/api/?results=10").then(res => {
      console.log(res);
      res.data.results.map(incomingAvatar => {
        this.setState(prevState => ({
          usersAvatar: [
            ...prevState.usersAvatar,
            incomingAvatar.picture.thumbnail
          ]
        }));
      });
    });
  }

  render() {
    // Lodash 'zips' the two arrays togeather to allow for mapping of state.
    const users = _.zip(this.state.usersInfo, this.state.usersAvatar);

    const zippedUsers = users.slice(1).map(user => {
      return (
        <User
          username={user[0].username}
          key={user[0].id}
          id={user[0].id}
          userAvatar={user[1]}
        />
      );
    });
    return <div>{zippedUsers}</div>;
  }
}
