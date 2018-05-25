import { Component } from "react";
import ReactDOM from "react-dom";
import { Route, Switch } from "react-router-dom";
import MenuDrawer from "./menuDrawer/MenuDrawer";
import ProfileLayout from "./userProfile/ProfileLayout";
import Albums from "./photoAlbums/Albums";
import Photos from "./photoAlbums/Photos";
import FourOhFour from "./404/404";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const drawerWidth = 150;

const styles = theme => ({
  content: {
    marginTop: theme.spacing.unit * 10,
    // marginRight: theme.spacing.unit * 2,
    // marginLeft: theme.spacing.unit * 2,
    margin: "auto",
    width: "50%",
    maxWidth: 1400,
    flexGrow: 1,
    backgroundColor: theme.palette.background.default
  },
  MenuDrawer: {
    zIndex: 3
  }
});

class Main extends Component {
  render() {
    const { classes, theme } = this.props;

    return (
      <main className={classes.content}>
        <MenuDrawer
          className={classes.MenuDrawer}
          handleDrawerToggle={this.props.handleDrawerToggle}
          mobileOpen={this.props.mobileOpen}
        />
        <Paper>
          <Switch>
            <Route
              exact
              path="/user/:id([1-9]|10)/"
              component={ProfileLayout}
            />
            <Route path="/albums/" component={Albums} />
            <Route path="/album/:id/photos" component={Photos} />
            <Route component={FourOhFour} />
          </Switch>
        </Paper>
      </main>
    );
  }
}

Main.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Main);
