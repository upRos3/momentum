import { Component } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

import HomeIcon from "@material-ui/icons/Home";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

export default class HomeButton extends Component {
  render() {
    return (
      <ListItem
        button
        onClick={this.props.handleDrawerToggle}
        component={Link}
        to="/user/1"
      >
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText inset primary="Home" />
      </ListItem>
    );
  }
}
