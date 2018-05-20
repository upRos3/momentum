import { Component } from "react";
import ReactDOM from "react-dom";
import typicodeApiCall from "../../helperFunctions";

export default class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    typicodeApiCall("posts", `?userId=1`).then(res => {
      this.setState({ posts: res });
    });
  }

  render() {
    // const album = this.state.albums.map(album => {
    //   return <Album title={album.title} key={album.id} id={album.id} />;
    // });
    return <div>something</div>;
  }
}
