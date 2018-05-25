import { Component } from "react";
import ReactDOM from "react-dom";
import Posts from "./posts/Posts";
import Profile from "./Profile";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 2
  },
  profile: {
    position: "relative",
    overflowX: "auto",
    flexGrow: 1,
    maxWidth: 320
  },
  pictureCell: {
    marginLeft: "auto",
    marginRight: "auto"
  }
});

class ProfileLayout extends Component {
  render() {
    const userId = this.props.match.params.id;
    const { classes } = this.props;

    return (
      <Grid container spacing={16} className={classes.root}>
        <Grid item xs>
          <Paper className={classes.profile}>
            <Profile userId={userId} />
          </Paper>
        </Grid>
        <Grid item xs className={classes.posts}>
          <Paper>
            <Posts userId={userId} />
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

ProfileLayout.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProfileLayout);
