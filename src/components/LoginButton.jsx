import { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
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
  state = {
    open: false,
    loggedIn: false
  };

  render() {
    const classes = this.props;
    const handleOpen = e => {
      this.setState({ open: true });
    };

    const handleClose = e => {
      this.setState({ open: false });
    };

    // This is temporary until I have the model working
    const login = e => {
      this.setState({ loggedIn: true });
    };

    const logout = e => {
      this.setState({ loggedIn: false });
    };

    const handleChange = e => {
      console.log("In the handle change");
    };

    const loginButtonToggle = () => {
      if (!this.state.loggedIn) {
        return (
          <div>
            <Button color="inherit" onClick={login}>
              Login
            </Button>
            <Modal
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
              open={this.state.open}
              onClose={handleClose}
            >
              <LoginModal />
            </Modal>
          </div>
        );
      } else {
        return (
          <Button color="inherit" onClick={logout}>
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
