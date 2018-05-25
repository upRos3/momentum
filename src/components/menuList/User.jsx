import { Component } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const styles = theme => {
  nested: {
    paddingLeft: theme.spacing.unit * 4;
  }
};

class User extends Component {
  render() {
    const { classes } = this.props;

    const userLink = `/user/${this.props.id}`;

    return (
      <ListItem
        button
        onClick={this.props.handleDrawerToggle}
        className={classes.nested}
        component={Link}
        to={userLink}
      >
        <Avatar
          alt="userAvatar"
          src={this.props.userAvatar}
          className={classes.avatar}
        />

        <ListItemText inset primary={this.props.username} />
      </ListItem>
    );
  }
}

User.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(User);
