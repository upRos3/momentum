import { Component } from "react";
import ReactDOM from "react-dom";
import Posts from "./posts/Posts";
import Profile from "./Profile";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

export default class ProfileLayout extends Component {
  render() {
    const params = this.props.match.params.id;

    return (
      <Grid container spacing={16}>
        <Grid item xs>
          <Paper>
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
