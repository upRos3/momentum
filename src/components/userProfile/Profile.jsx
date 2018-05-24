import { Component } from "react";
import ReactDOM from "react-dom";
import typicodeApiGET from "../../helperFunctions/typicodeGet.js";

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
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto",
    flexGrow: 1,
    maxWidth: 300
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
    typicodeApiGET("users", this.props.userId).then(res => {
      this.setState({ userInfo: res });
    });
  }

  componentDidUpdate() {
    // Conditional needs to read different data types
    if (this.props.userId != this.state.userInfo.id) {
      typicodeApiGET("users", this.props.userId).then(res => {
        this.setState({ userInfo: res });
      });
    }
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
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
                  <a
                    href={"mailto:" + this.state.userInfo.email}
                    target="_blank"
                  >
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
                  <a
                    href={"http://" + this.state.userInfo.website}
                    target="_blank"
                  >
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
