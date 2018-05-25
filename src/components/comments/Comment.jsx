import { Component } from "react";
import ReactDOM from "react-dom";

import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

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
