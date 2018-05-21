import { Component } from "react";
import ReactDOM from "react-dom";

import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

export default class Comment extends Component {
  render() {
    return (
      <ListItem>
        <ListItemText
          inset
          primary={this.props.name}
          secondary={this.props.body}
        />
      </ListItem>
    );
  }
}
