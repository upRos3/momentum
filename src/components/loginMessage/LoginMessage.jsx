import { Component } from "react";
import ReactDOM from "react-dom";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/styles";

const styles = theme => ({
  loginMessage: {
    margin: 200
  }
});

class LoginMessage extends Component {
  render() {
    const { classes, theme } = this.props;
    return (
      <Paper className={classes.loginMessage}>
        <div>To continue please login</div>;
      </Paper>
    );
  }
}

LoginMessage.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(LoginMessage);
