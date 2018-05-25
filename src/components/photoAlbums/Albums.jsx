import { Component } from "react";
import ReactDOM from "react-dom";
import Album from "./Album";
import typicodeApiGET from "../../helperFunctions/typicodeGet.js";

export default class Albums extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: []
    };
  }

  componentDidMount() {
    typicodeApiGET("albums", `?userId=1`).then(res => {
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
