import { Component } from "react";
import ReactDOM from "react-dom";
import User from "./User";
// import Lodash from "lodash";
import typicodeApiGET from "../../helperFunctions/typicodeGet.js";

export default class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usersInfo: []
      // usersAvatar: []
    };
  }

  componentDidMount() {
    typicodeApiGET("users").then(res => {
      this.setState({ usersInfo: res });
    });

    // create loading function here
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
    // Lodash 'zips' the two arrays togeather to allow for mapping of state.
    // const user = _.zip(this.state.usersInfo, this.state.usersAvatar).map(
    // Will come back to this later in the project as a stretch
    const user = this.state.usersInfo.map(user => {
      return (
        <User
          username={user.username}
          key={user.id}
          id={user.id}
          handleDrawerToggle={this.props.handleDrawerToggle}
          // userAvatar={user[1]}
        />
      );
    });
    return <div>{user}</div>;
  }
}
