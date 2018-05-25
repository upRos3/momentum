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
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default
  },
  containerWithDrawer: {
    zIndex: 100,
    position: "relative",
    marginTop: theme.spacing.unit * 10,
    marginLeft: theme.spacing.unit * 32,
    margin: "auto",
    width: "50%"
  },
  containerWithoutDrawer: {
    zIndex: 100,
    position: "relative",
    marginTop: theme.spacing.unit * 10,
    margin: "auto",
    width: "auto"
  },
  MenuDrawer: {
    zIndex: 3
  }
});

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.updatePredicate = this.updatePredicate.bind(this);
  }
  componentDidMount() {
    this.updatePredicate();
    window.addEventListener("resize", this.updatePredicate);
  }

  componentWillUnmount() {
    console.log("Bang");
    window.removeEventListener("resize", this.updatePredicate);
  }

  updatePredicate() {
    this.setState({ isDesktop: window.innerWidth > 959 });
  }

  render() {
    const { classes, theme } = this.props;

    const isDesktop = this.state.isDesktop
      ? classes.containerWithDrawer
      : classes.containerWithoutDrawer;

    return (
      <main className={classes.root}>
        <MenuDrawer
          className={classes.MenuDrawer}
          handleDrawerToggle={this.props.handleDrawerToggle}
          mobileOpen={this.props.mobileOpen}
          isDesktop={this.state.isDesktop}
        />
        <div className={isDesktop}>
          <Paper className={classes.content}>
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
        </div>
      </main>
    );
  }
}

Main.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Main);
