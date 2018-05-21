import { Component } from "react";
import ReactDOM from "react-dom";
import Comments from "../../comments/Comments";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Collapse from "@material-ui/core/Collapse";

const styles = theme => ({
  nested: {
    paddingLeft: theme.spacing.unit * 4
  }
});

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commentText: "",
      open: false
    };
  }

  handleClick = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Grid container spacing={0} className={classes.container}>
          <Grid item xs>
            <ListItem button onClick={this.handleClick}>
              <Avatar
                alt="albumAvatar"
                src="https://www.placecage.com/c/200/300"
              />
              <ListItemText
                inset
                primary={this.props.title}
                secondary={this.props.body}
              />
              {this.state.open}
            </ListItem>
            <Divider />
          </Grid>
          <Collapse in={this.state.open} timeout="auto" unmountOnExit>
            <Grid item xs>
              <List component="div" disablePadding>
                <Comments postId={this.props.id} />
              </List>
            </Grid>
          </Collapse>
        </Grid>
      </div>
    );
  }
}

Post.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Post);
