import { Component } from "react";
import ReactDOM from "react-dom";
import { Route } from "react-router-dom";
import Posts from "./posts/Posts";
import Profile from "./Profile";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

export default class ProfileLayout extends Component {
  render() {
    return (
      <Grid container spacing={16}>
        <Grid item xs>
          <Paper>
            <Route path="/user/:id" component={Profile} />
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper>
            <Route path="/user/:id/posts" component={Posts} />
          </Paper>
        </Grid>
      </Grid>
    );
  }
}
