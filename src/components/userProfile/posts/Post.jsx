import { Component } from "react";
import ReactDOM from "react-dom";
import Comments from "../../comments/Comments";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Collapse from "@material-ui/core/Collapse";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

export default class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commentText: "",
      open: false
    };
  }

  handleClick = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <ListItem button onClick={this.handleClick}>
          <Avatar alt="userAvatar" src="https://www.placecage.com/c/200/300" />
          <ListItemText
            inset
            primary={`${this.props.title} - Click for comments`}
            secondary={this.props.body}
          />
        </ListItem>
        <Divider />
        <Collapse in={this.state.open} unmountOnExit>
          <List component="div">
            <Comments postId={this.props.id} />
          </List>
        </Collapse>
      </div>
    );
  }
}
