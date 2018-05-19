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
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  root: {
    width: "50%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto",
    flexGrow: 1
  },
  table: {
    maxWidth: 490
  },
  pictureCell: {
    marginLeft: "auto",
    marginRight: "auto"
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
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Something went wrong...");
        }
      })
      .then(data => this.setState({ usersInfo: data }))
      .catch(err => console.log(err));
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
        <Table className={classes.table}>
          <TableBody>
            <TableRow key="photo">
              <TableCell className={classes.pictureCell} component="th">
                <img src="https://www.placecage.com/gif/200/300" />
              </TableCell>
            </TableRow>

            <TableRow key="name">
              <TableCell
                className={classes.tableCell}
                component="th"
                scope="row"
              >
                <Typography
                  variant="subheading"
                  component="p"
                  color="inherit"
                  className={classes.flex}
                  style={styles.flex}
                  align="center"
                  noWrap
                >
                  Name: {this.state.usersInfo.name}
                </Typography>
              </TableCell>
            </TableRow>

            <TableRow key="username">
              <TableCell
                className={classes.tableCell}
                component="th"
                scope="row"
              >
                <Typography
                  variant="subheading"
                  component="p"
                  color="inherit"
                  className={classes.flex}
                  style={styles.flex}
                  align="center"
                  noWrap
                >
                  Username: {this.state.usersInfo.username}
                </Typography>
              </TableCell>
            </TableRow>

            <TableRow key="email">
              <TableCell
                className={classes.tableCell}
                component="th"
                scope="row"
              >
                <Typography
                  variant="subheading"
                  component="p"
                  color="inherit"
                  className={classes.flex}
                  style={styles.flex}
                  align="center"
                  noWrap
                >
                  Email:{" "}
                  <a href={"mailto:" + this.state.usersInfo.email}>
                    {this.state.usersInfo.email}
                  </a>
                </Typography>
              </TableCell>
            </TableRow>

            <TableRow key="website">
              <TableCell
                className={classes.tableCell}
                component="th"
                scope="row"
              >
                <Typography
                  variant="subheading"
                  component="p"
                  color="inherit"
                  className={classes.flex}
                  style={styles.flex}
                  align="center"
                  noWrap
                >
                  Website:{" "}
                  <a href={"http://" + this.state.usersInfo.website}>
                    {this.state.usersInfo.website}
                  </a>
                </Typography>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    );
  }
}

Profile.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Profile);
