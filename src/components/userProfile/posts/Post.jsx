import { Component } from "react";
import ReactDOM from "react-dom";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Divider from "@material-ui/core/Divider";

const styles = theme => {};

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commentText: ""
    };
  }

  render() {
    const { classes } = this.props;

    // const postTextHandler = evt => {
    //   console.log("HI");
    //   this.setState({ commentText: evt.target.value });
    // };

    return (
      <div>
        <Grid container spacing={0}>
          <Grid item xs>
            <ListItem button>
              <Avatar
                alt="albumAvatar"
                src="https://www.placecage.com/c/200/300"
              />
              <ListItemText
                inset
                primary={this.props.title}
                secondary={this.props.body}
              />
            </ListItem>
            <Divider />
          </Grid>
          <Grid item xs>
            <ListItem>
              <ListItemText inset primary="this is a comment" />
            </ListItem>
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
                      this.setState({ commentText: evt.target.value });
                    }
                  }
                }}
              />
            </ListItem>
          </Grid>
        </Grid>
      </div>
    );
  }
}

Post.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Post);
