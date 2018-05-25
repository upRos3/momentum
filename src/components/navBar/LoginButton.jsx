import { Component } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import LoginModal from "./LoginForm";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";

const styles = {
  flex: 1
};

class LoginButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      loggedIn: false
    };
  }

  handleOpen = e => {
    this.setState({ open: true });
  };

  handleClose = e => {
    this.setState({ open: false });
  };

  render() {
    const classes = this.props;

    const login = e => {
      this.setState({ loggedIn: true });
    };

    const logout = e => {
      this.setState({ loggedIn: false });
      localStorage.clear();
    };

    const loginButtonToggle = () => {
      if (localStorage.getItem("loggedIn") !== "true") {
        return (
          <div>
            <Button color="inherit" onClick={this.handleOpen}>
              Login
            </Button>
            <Modal open={this.state.open} onClose={this.handleClose}>
              <LoginModal />
            </Modal>
          </div>
        );
      } else {
        return (
          <Button
            color="inherit"
            onClick={logout}
            component={Link}
            to={"/login"}
          >
            Logout
          </Button>
        );
      }
    };

    return loginButtonToggle();
  }
}

LoginButton.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LoginButton);
