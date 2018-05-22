import { Component } from "react";
import ReactDOM from "react-dom";
import Comment from "./Comment";
import PostComment from "./PostComment";
import typicodeApiGET from "../../helperFunctions/typicodeGet";
import typicodeApiPOST from "../../helperFunctions/typicodePost";

export default class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      // Small hack to stop id's clashing if more than one comment is POSTed
      idCount: 0
    };
  }

  componentDidMount() {
    typicodeApiGET("comments", `?postId=${this.props.postId}`).then(res => {
      this.setState({ comments: res });
    });
  }

  postCommentHandler = newComment => {
    const payload = {
      comments: {
        name: "You",
        body: newComment,
        postId: this.props.postId
      }
    };

    typicodeApiPOST("comments", payload).then(res => {
      console.log(res);
      this.setState(prevState => ({
        idCount: this.state.idCount + 1,
        comments: [
          ...prevState.comments,
          {
            name: "You",
            body: newComment,
            postId: this.props.postId,
            id: res.data.id + this.state.idCount
          }
        ]
      }));
    });
  };

  render() {
    const comments = this.state.comments.map(comment => {
      return (
        <Comment
          name={comment.name}
          body={comment.body}
          key={comment.id}
          id={comment.id}
        />
      );
    });
    return (
      <div>
        {comments}
        <PostComment postCommentHandler={this.postCommentHandler} />
      </div>
    );
  }
}
