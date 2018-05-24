import { Component } from "react";
import ReactDOM from "react-dom";
import { Route, Redirect } from "react-router-dom";
import NavBar from "./navBar/NavBar";
import Main from "./Main";
import Welcome from "./welcome/Welcome";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const styles = theme => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    overflow: "hidden",
    position: "relative",
    display: "flex",
    width: "100%"
  },
  welcome: {
    margin: 200
  }
});

class Layout extends Component {
  state = {
    mobileOpen: false
  };

  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };

  render() {
    const { classes, theme } = this.props;

    return localStorage.getItem("loggedIn") !== "true" ? (
      <div className={classes.root}>
        <NavBar
          handleDrawerToggle={this.handleDrawerToggle}
          mobileOpen={this.state.mobileOpen}
          loggedIn={this.state.loggedIn}
        />
        <Paper className={classes.welcome}>
          <Route path="/login" component={Welcome} />
        </Paper>
      </div>
    ) : (
      <div className={classes.root}>
        <NavBar
          handleDrawerToggle={this.handleDrawerToggle}
          mobileOpen={this.state.mobileOpen}
          loggedIn={this.state.loggedIn}
        />
        <Main
          handleDrawerToggle={this.handleDrawerToggle}
          mobileOpen={this.state.mobileOpen}
        />
      </div>
    );
  }
}

Layout.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Layout);
