import { Component } from "react";
import ReactDOM from "react-dom";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";

const styles = theme => {};

class Album extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <Grid container spacing={0}>
          <Grid item xs>
            <ListItem button>
              <Avatar
                alt="albumAvatar"
                src="https://www.placecage.com/c/200/300"
              />
              <ListItemText
                inset
                primary={this.props.title}
                secondary={this.props.body}
              />
            </ListItem>
          </Grid>
          <Grid item xs>
            <ListItem>
              <ListItemText inset primary="this is a comment" />
            </ListItem>
          </Grid>
        </Grid>
      </div>
    );
  }
}

Album.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Album);
