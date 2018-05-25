import { Component } from "react";
import ReactDOM from "react-dom";
import HomeButton from "./HomeButton";
import AlbumsButton from "./AlbumsButton";
import UsersButton from "./UsersButton";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";

const styles = theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
});

class MenuList extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <List component="nav">
          <HomeButton handleDrawerToggle={this.props.handleDrawerToggle} />
          <AlbumsButton handleDrawerToggle={this.props.handleDrawerToggle} />
          <UsersButton handleDrawerToggle={this.props.handleDrawerToggle} />
        </List>
      </div>
    );
  }
}

MenuList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MenuList);
