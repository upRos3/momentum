import { Component } from "react";
import ReactDOM from "react-dom";
import typicodeApiGET from "../../../helperFunctions/typicodeGet.js";
import Post from "./Post";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

export default class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    typicodeApiGET("posts", `?userId=${this.props.userId}`).then(res => {
      this.setState({ posts: res });
    });
  }

  componentDidUpdate() {
    // Deals with async issue due to eventListener in Main
    if (!this.state.posts[0]) {
      return null;
    }
    // Conditional needs needs to read different data types
    if (this.props.userId != this.state.posts[0].userId) {
      typicodeApiGET("posts", `?userId=${this.props.userId}`).then(res => {
        this.setState({ posts: res });
      });
    }
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
