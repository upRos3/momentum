import { Component } from "react";
import ReactDOM from "react-dom";
import typicodeApiCall from "../../helperFunctions";
import Album from "./Album";

export default class Albums extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: []
    };
  }

  componentDidMount() {
    typicodeApiCall("albums", `?userId=1`).then(res => {
      this.setState({ albums: res });
    });
  }

  render() {
    const album = this.state.albums.map(album => {
      return <Album title={album.title} key={album.id} id={album.id} />;
    });
    return <div>{album}</div>;
  }
}
