import { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
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

class UsersButton extends Component {
  state = { open: true };

  handleClick = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    const { classes } = this.props;

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
            <ListItem button className={classes.nested}>
              {/* Avatar will go here */}
              <ListItemText inset primary="Username" />
            </ListItem>
          </List>
        </Collapse>
      </div>
    );
  }
}

UsersButton.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(UsersButton);
