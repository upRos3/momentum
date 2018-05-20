import { Component } from "react";
import ReactDOM from "react-dom";
import { Route } from "react-router-dom";
import NavBar from "./navBar/NavBar";
import MenuDrawer from "./menuDrawer/MenuDrawer";
import Profile from "./userProfile/Profile";
import Albums from "./photoAlbums/Albums";
import Photos from "./photoAlbums/Photos";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const drawerWidth = 150;

const styles = theme => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    overflow: "hidden",
    position: "relative",
    display: "flex",
    width: "100%"
  },
  content: {
    marginTop: theme.spacing.unit * 10,
    margin: "auto",
    maxWidth: 490,
    flexGrow: 1,
    backgroundColor: theme.palette.background.default
    // padding: theme.spacing.unit * 1
  }
});

class Main extends Component {
  state = {
    mobileOpen: false
  };

  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };

  // Should have another paper NEXT to this one for the user posts by their profile
  render() {
    const { classes, theme } = this.props;

    return (
      <div className={classes.root}>
        <NavBar
          handleDrawerToggle={this.handleDrawerToggle}
          mobileOpen={this.state.mobileOpen}
        />
        <MenuDrawer
          handleDrawerToggle={this.handleDrawerToggle}
          mobileOpen={this.state.mobileOpen}
        />
        <main className={classes.content}>
          <Paper>
            <Route path="/user/:id" component={Profile} />
          </Paper>
          <Paper>
            <Route path="/albums/" component={Albums} />
          </Paper>
          <Paper>
            <Route path="/album/:id/photos" component={Photos} />
          </Paper>
        </main>
      </div>
    );
  }
}

Main.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Main);
