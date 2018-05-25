import { Component } from "react";
import ReactDOM from "react-dom";
import { Redirect, Route } from "react-router-dom";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const styles = theme => ({
  paper: {
    position: "absolute",
    width: theme.spacing.unit * 23,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    right: 30,
    top: 90
  }
});

class LoginModal extends Component {
  state = { submitted: false };

  render() {
    const { classes } = this.props;

    return !this.state.submitted ? (
      <div>
        <div className={classes.paper}>
          <form autoComplete="off">
            <TextField
              id="name"
              label="Username"
              autoFocus={true}
              margin="normal"
              placeholder="Press enter to send"
              onKeyPress={evt => {
                if (evt.key === "Enter" && evt.target.value.length !== 0) {
                  evt.preventDefault();
                  if (evt.target.value !== "Bret") {
                    alert("Incorrect Username");
                  } else {
                    localStorage.setItem("loggedIn", "true");
                    evt.target.value = "";
                    this.setState({ submitted: true });
                  }
                }
              }}
            />
          </form>
        </div>
      </div>
    ) : (
      <Redirect to="/user/1" />
    );
  }
}

LoginModal.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LoginModal);
