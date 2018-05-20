import { Component } from "react";
import ReactDOM from "react-dom";
import typicodeApiCall from "../../helperFunctions";

export default class Albums extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: []
    };
  }

  componentDidMount() {
    typicodeApiCall("albums").then(res => {
      this.setState({ albums: res });
    });
  }

  render() {
    // const user = this.state.usersInfo.map(user => {}
    return <div>something</div>;
  }
}
