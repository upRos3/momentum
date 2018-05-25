import { Component } from "react";
import ReactDOM from "react-dom";
import LoginMessage from "./loginMessage/LoginMessage";
import NavBar from "./navBar/NavBar";
import Main from "./Main";

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
  loginMessage: {
    margin: 200
  }
});

class Layout extends Component {
  render() {
    const { classes, theme } = this.props;
    return localStorage.getItem("loggedIn") !== "true" ? (
      <div className={classes.root}>
        <Paper className={classes.loginMessage}>
          <LoginMessage />
        </Paper>
      </div>
    ) : (
      <div className={classes.root}>
        <Main
          handleDrawerToggle={this.props.handleDrawerToggle}
          mobileOpen={this.props.mobileOpen}
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
