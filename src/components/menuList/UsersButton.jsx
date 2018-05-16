import { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Users from "./Users";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import FriendIcon from "@material-ui/icons/Person";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

const styles = theme => {
  nested: {
    paddingLeft: theme.spacing.unit * 4;
  }
};

export default class UsersButton extends Component {
  state = {
    open: true
  };

  handleClick = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    return (
      <div>
        <ListItem button onClick={this.handleClick}>
          <ListItemIcon>
            <FriendIcon />
          </ListItemIcon>
          <ListItemText inset primary="Friends" />
          {this.state.open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={this.state.open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <Users />
          </List>
        </Collapse>
      </div>
    );
  }
}
