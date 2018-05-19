import { Component } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from "@material-ui/icons/Home";

export default class HomeButton extends Component {
  render() {
    return (
      <ListItem button component={Link} to="/">
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText inset primary="Home" />
      </ListItem>
    );
  }
}
