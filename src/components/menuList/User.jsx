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
  state = {
    users: []
  };

  componentWillMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => this.setState({ users: data }));
  }

  render() {
    const { classes } = this.props;

    this.state.users.map(user => {
      console.log(user.username);
    });

    return (
      <ListItem button className={classes.nested}>
        {/* Avatar will go here */}
        {/* Will map API into here to give a list of 'friends' */}
        <ListItemText inset primary="Username" />
      </ListItem>
    );
  }
}

User.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(User);
