import { Component } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AlbumIcon from "@material-ui/icons/PhotoAlbum";

export default class AlbumsButton extends Component {
  render() {
    return (
      <ListItem
        button
        onClick={this.props.handleDrawerToggle}
        component={Link}
        to="/albums"
      >
        <ListItemIcon>
          <AlbumIcon />
        </ListItemIcon>
        <ListItemText inset primary="Albums" />
      </ListItem>
    );
  }
}
