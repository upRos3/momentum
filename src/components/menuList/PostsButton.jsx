import { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ForumIcon from "@material-ui/icons/Forum";

export default class PostsButton extends Component {
  render() {
    return (
      <ListItem button onClick={this.props.handleDrawerToggle}>
        <ListItemIcon>
          <ForumIcon />
        </ListItemIcon>
        <ListItemText inset primary="Posts" />
      </ListItem>
    );
  }
}
