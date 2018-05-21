import { Component } from "react";
import ReactDOM from "react-dom";

import ListItem from "@material-ui/core/ListItem";
import TextField from "@material-ui/core/TextField";

export default class PostComment extends Component {
  render() {
    // const postTextHandler = evt => {
    //   console.log("HI");
    //   this.setState({ commentText: evt.target.value });
    // };

    return (
      <ListItem>
        <TextField
          id="full-width"
          label="Leave a comment:"
          InputLabelProps={{
            shrink: true
          }}
          // onChange={postTextHandler}
          placeholder="Placeholder"
          fullWidth
          margin="normal"
          onKeyPress={evt => {
            if (evt.key === "Enter" && evt.target.value.length !== 0) {
              {
                // this.setState({ commentText: evt.target.value });
                console.log("YEAAA");
              }
            }
          }}
        />
      </ListItem>
    );
  }
}
