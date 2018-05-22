import { Component } from "react";
import ReactDOM from "react-dom";

import ListItem from "@material-ui/core/ListItem";
import TextField from "@material-ui/core/TextField";

export default class PostComment extends Component {
  render() {
    return (
      <ListItem>
        <TextField
          id="full-width"
          label="Leave a comment:"
          InputLabelProps={{
            shrink: true
          }}
          // onChange={this.clearText}
          placeholder="Placeholder"
          fullWidth
          margin="normal"
          onKeyPress={evt => {
            if (evt.key === "Enter" && evt.target.value.length !== 0) {
              {
                this.props.postCommentHandler(evt.target.value);
                evt.target.value = "";
              }
            }
          }}
        />
      </ListItem>
    );
  }
}
