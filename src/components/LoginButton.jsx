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

    const loginButtonToggle = () => {
      if (!this.state.loggedIn) {
        return (
          <div>
            <Button color="inherit" onClick={handleOpen}>
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
          <Typography variant="button" color="inherit">
            Josh
          </Typography>
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
