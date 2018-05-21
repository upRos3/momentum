import { Component } from "react";
import ReactDOM from "react-dom";
import Comment from "./Comment";
import PostComment from "./PostComment";
import typicodeApiGET from "../../helperFunctions/typicodeGet.js";

export default class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: []
    };
  }

  componentDidMount() {
    typicodeApiGET("comments", `?postId=${this.props.postId}`).then(res => {
      this.setState({ comments: res });
    });
  }

  // componentDidUpdate() {}
  postTextHandler = newComment => {
    this.setState(prevState => ({
      comments: [
        ...prevState.comments,
        { body: newComment, postId: this.props.postId }
      ]
    }));
  };

  render() {
    const comments = this.state.comments.map(comment => {
      return <Comment body={comment.body} key={comment.id} id={comment.id} />;
    });
    return (
      <div>
        {comments}
        <PostComment postTextHandler={this.postTextHandler} />
      </div>
    );
  }
}
