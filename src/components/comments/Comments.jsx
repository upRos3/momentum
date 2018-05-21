import { Component } from "react";
import ReactDOM from "react-dom";
import Comment from "./Comment";
import typicodeApiGET from "../../helperFunctions/typicodeGet.js";

export default class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: []
    };
  }

  componentDidMount() {
    typicodeApiGET("comments", `?postId=${this.props.commentId}`).then(res => {
      this.setState({ comments: res });
    });
  }

  // componentDidUpdate() {
  //   // Conditional needs needs to read different data types
  //   if (this.props.params != this.state.comments[0].userId) {
  //     typicodeApiGET("comments", `?postId=1`).then(res => {
  //       this.setState({ comments: res });
  //     });
  //   }
  // }

  render() {
    const comments = this.state.comments.map(comment => {
      return <Comment body={comment.body} key={comment.id} id={comment.id} />;
    });
    return <div>{comments}</div>;
  }
}
