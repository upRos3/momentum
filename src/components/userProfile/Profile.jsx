import { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 6,
    overflowX: "auto",
    flexGrow: 1
  },
  table: {
    minWidth: 250
  }
});

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usersInfo: []
    };
  }

  componentDidMount() {
    if (this.props.match) {
      fetch(
        `https://jsonplaceholder.typicode.com/users/${
          this.props.match.params.id
        }`
      )
        .then(res => res.json())
        .then(data => this.setState({ usersInfo: data }));
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log(nextProps);
  }

  render() {
    console.log(this.props);
    const { classes } = this.props;

    return (
      <div>
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableBody>
              <TableRow key="something">
                <TableCell component="th" scope="row">
                  {this.state.usersInfo.id}
                </TableCell>
                <TableCell>{this.state.usersInfo.name}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }
}

Profile.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Profile);
