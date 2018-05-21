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
    position: "relative",
    marginTop: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit * 10,
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
    const params = this.props.match.params.id;
    const { classes } = this.props;

    return (
      <Grid container spacing={16}>
        <Grid item xs>
          <Paper className={classes.root}>
            <Profile params={params} />
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper>
            <Posts params={params} />
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
