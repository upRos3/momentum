import { Component } from "react";
import ReactDOM from "react-dom";
import User from "./User";
import Lodash from "lodash";
import axios from "axios";
import API from "../../api";

export default class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usersInfo: []
      // usersAvatar: []
    };
  }

  componentDidMount() {
    API.get(`users/`)
      .then(res => {
        this.setState({ usersInfo: res.data });
      })
      .catch(err => console.log(err));
    // .then(
    //   axios.get("https://randomuser.me/api/?results=10").then(res => {
    //     res.data.results.map(incomingAvatar => {
    //     this.setState(prevState => ({
    //       usersAvatar: [
    //         ...prevState.usersAvatar,
    //         incomingAvatar.picture.thumbnail
    //       ]
    //     }));
    //     });
    //     this.setState({ usersAvatar: res.data.results. });
    //   })
    // );
  }

  render() {
    console.log(this.state);
    // Lodash 'zips' the two arrays togeather to allow for mapping of state.
    // const user = _.zip(this.state.usersInfo, this.state.usersAvatar).map(
    // Will come back to this later in the project as a stretch
    const user = this.state.usersInfo.map(user => {
      return (
        <User
          username={user.username}
          key={user.id}
          id={user.id}
          // userAvatar={user[1]}
        />
      );
    });
    return <div>{user}</div>;
  }
}
