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
  state = {};

  render() {
    const { classes } = this.props;

    return (
      <div>
        <div className={classes.paper}>
          <form autoComplete="off">
            <TextField
              id="name"
              label="Username"
              autoFocus={true}
              margin="normal"
              onKeyPress={evt => {
                if (evt.key === "Enter" && evt.target.value.length !== 0) {
                  if (evt.target.value !== "Bret") {
                    evt.preventDefault();
                    alert("Incorrect Username");
                  } else {
                    localStorage.setItem("loggedIn", "true");
                    evt.target.value = "";
                    window.location.href("/user/1");
                  }
                }
              }}
            />
          </form>
        </div>
      </div>
    );
  }
}

LoginModal.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LoginModal);
