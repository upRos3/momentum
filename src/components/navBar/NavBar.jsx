import { Component } from "react";
import ReactDOM from "react-dom";
import LoginButton from "./LoginButton";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const drawerWidth = 240;

const styles = theme => ({
  appBarLoggedIn: {
    position: "fixed",
    marginLeft: drawerWidth,
    [theme.breakpoints.up("md")]: {
      width: `calc(100% - ${drawerWidth}px)`
    }
  },
  appBarLoggedOut: {
    position: "fixed",
    width: "100%"
  },
  navIconHide: {
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },
  flex: {
    flex: 1
  }
});

class NavBar extends Component {
  render() {
    const { classes } = this.props;

    return (
      <AppBar
        className={
          localStorage.getItem("loggedIn") !== "true"
            ? classes.appBarLoggedOut
            : classes.appBarLoggedIn
        }
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={this.props.handleDrawerToggle}
            className={classes.navIconHide}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="title"
            color="inherit"
            className={classes.flex}
            style={styles.flex}
            noWrap
          >
            Momentum
          </Typography>
          <LoginButton />
        </Toolbar>
      </AppBar>
    );
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(NavBar);
