import { Component } from "react";
import ReactDOM from "react-dom";
import MenuList from "../menuList/MenuList";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";

const drawerWidth = 240;

const styles = theme => ({
  drawerPaper: {
    width: drawerWidth,
    [theme.breakpoints.up("md")]: {
      position: "fixed"
    }
  }
});

class MenuDrawer extends Component {
  render() {
    const { classes, theme } = this.props;

    const drawer = (
      <div>
        <div className={classes.toolbar} />
        <Divider />
        <MenuList handleDrawerToggle={this.props.handleDrawerToggle} />
        <Divider />
      </div>
    );

    const responsiveDrawer = this.props.isDesktop ? (
      <Drawer
        variant="permanent"
        open
        classes={{
          paper: classes.drawerPaper
        }}
      >
        {drawer}
      </Drawer>
    ) : (
      <Drawer
        variant="temporary"
        anchor={theme.direction === "rtl" ? "right" : "left"}
        open={this.props.mobileOpen}
        onClose={this.props.handleDrawerToggle}
        classes={{
          paper: classes.drawerPaper
        }}
        ModalProps={{
          keepMounted: true
        }}
      >
        {drawer}
      </Drawer>
    );

    return <div>{responsiveDrawer}</div>;
  }
}

MenuDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(MenuDrawer);
