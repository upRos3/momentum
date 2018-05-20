import { Component } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import apiCall from "../../helperFunctions";

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

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: []
    };
  }

  componentDidMount() {
    apiCall(this.props.match.params.id).then(res => {
      this.setState({ userInfo: res });
    });
  }

  componentDidUpdate() {
    // Conditional needs needs to read different data types
    if (this.props.match.params.id != this.state.userInfo.id) {
      apiCall(this.props.match.params.id).then(res => {
        this.setState({ userInfo: res });
      });
    }
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
                  Name: {this.state.userInfo.name}
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
                  Username: {this.state.userInfo.username}
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
                  <a href={"mailto:" + this.state.userInfo.email}>
                    {this.state.userInfo.email}
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
                  <a href={"http://" + this.state.userInfo.website}>
                    {this.state.userInfo.website}
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
