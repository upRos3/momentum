import { Component } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

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
    width: 700,
    marginTop: theme.spacing.unit * 6,
    overflowX: "auto",
    flexGrow: 1
  },
  table: {
    maxWidth: 320
  },
  tableCell: {
    width: 40
  }
});

// const callApi = params => {
//   fetch(`https://jsonplaceholder.typicode.com/users/${params}`)
//     .then(res => res.json())
//     .then(data => {
//       return data;
//     });
// };

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usersInfo: []
    };
  }

  componentWillMount() {
    // console.log(callApi(this.props.match.params.id));
    // this.setState({ usersInfo: callApi(this.props.match.params.id) });
    // debugger;
    fetch(
      `https://jsonplaceholder.typicode.com/users/${this.props.match.params.id}`
    )
      .then(res => res.json())
      .then(data => {
        this.setState({ usersInfo: data });
      });
  }

  // componentWillUpdate() {
  //   if (this.state.usersInfo) this.setState({ usersInfo: [] });
  // }

  componentDidUpdate() {
    // this.setState({ usersInfo: [] });
    fetch(
      `https://jsonplaceholder.typicode.com/users/${this.props.match.params.id}`
    )
      .then(res => res.json())
      .then(data => {
        if (this.state.usersInfo !== data) {
          this.setState({ usersInfo: data });
        } else {
          return null;
        }
      });
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableBody>
              <TableRow key="photo">
                <TableCell className={classes.tableCell}>
                  <img src="https://www.placecage.com/gif/200/300" />
                </TableCell>
              </TableRow>{" "}
              <TableRow key="name">
                <TableCell
                  className={classes.tableCell}
                  component="th"
                  scope="row"
                >
                  <span>Name</span>
                </TableCell>
                <TableCell className={classes.tableCell}>
                  {this.state.usersInfo.name}
                </TableCell>
              </TableRow>{" "}
              <TableRow key="username">
                <TableCell
                  className={classes.tableCell}
                  // component="th"
                  // scope="row"
                >
                  <span>Username</span>
                </TableCell>
                <TableCell className={classes.tableCell}>
                  {this.state.usersInfo.username}
                </TableCell>
              </TableRow>{" "}
              <TableRow key="email">
                <TableCell
                  className={classes.tableCell}
                  component="th"
                  scope="row"
                >
                  <span>Email</span>
                </TableCell>
                <TableCell className={classes.tableCell}>
                  <a href={"mailto:" + this.state.usersInfo.email}>
                    {this.state.usersInfo.email}
                  </a>
                </TableCell>
              </TableRow>{" "}
              <TableRow key="website">
                <TableCell
                  className={classes.tableCell}
                  component="th"
                  scope="row"
                >
                  <span>Website</span>
                </TableCell>
                <TableCell className={classes.tableCell}>
                  <a href={"http://" + this.state.usersInfo.website}>
                    {this.state.usersInfo.website}
                  </a>
                </TableCell>
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
