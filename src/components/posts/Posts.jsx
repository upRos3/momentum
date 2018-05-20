import { Component } from "react";
import ReactDOM from "react-dom";
import typicodeApiCall from "../../helperFunctions";
import Post from "./Post";

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
    const post = this.state.posts.map(post => {
      return (
        <Post title={post.title} body={post.body} key={post.id} id={post.id} />
      );
    });
    return <div>{post}</div>;
  }
}
