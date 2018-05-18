import { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
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
          <form className={classes.container} noValidate autoComplete="off">
            <TextField
              id="name"
              label="Name"
              className={classes.textField}
              value=""
              // onChange={classes.handleChange}
              margin="normal"
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
