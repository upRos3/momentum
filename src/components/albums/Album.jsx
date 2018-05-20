import { Component } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";

const styles = theme => {};

class Album extends Component {
  render() {
    const { classes } = this.props;

    const albumLink = `/albums/`;

    return (
      <ListItem button component={Link} to={albumLink}>
        <Avatar alt="albumAvatar" src="https://www.placecage.com/c/200/300" />

        <ListItemText inset primary={this.props.title} />
      </ListItem>
    );
  }
}

Album.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Album);
