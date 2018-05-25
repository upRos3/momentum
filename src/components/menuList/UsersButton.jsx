import { Component } from "react";
import ReactDOM from "react-dom";
import Users from "./Users";

import Collapse from "@material-ui/core/Collapse";
import FriendIcon from "@material-ui/icons/Person";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

export default class UsersButton extends Component {
  state = {
    open: true
  };

  handleFriendsClick = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    return (
      <div>
        <ListItem button onClick={this.handleFriendsClick}>
          <ListItemIcon>
            <FriendIcon />
          </ListItemIcon>
          <ListItemText inset primary="Friends" />
          {this.state.open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={this.state.open}>
          <List component="div" disablePadding>
            <Users handleDrawerToggle={this.props.handleDrawerToggle} />
          </List>
        </Collapse>
      </div>
    );
  }
}
