import { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
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

    console.log(this.props);

    const userLink = `/user/${this.props.id}`;

    return (
      <ListItem
        button
        className={classes.nested}
        component={Link}
        to={userLink}
      >
        {/* Avatar will go here */}

        <ListItemText inset primary={this.props.username} />
      </ListItem>
    );
  }
}

User.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(User);
