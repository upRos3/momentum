import { Component } from "react";
import typicodeApiCall from "../../helperFunctions";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import Subheader from "@material-ui/core/ListSubheader";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    width: 500,
    height: 450
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)"
  }
});

class Photos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: []
    };
  }

  componentDidMount() {
    typicodeApiCall("photos", `?albumId=${this.props.match.params.id}`).then(
      res => {
        this.setState({ photos: res });
      }
    );
  }

  // componentDidUpdate() {
  //   // Conditional needs needs to read different data types
  //   if (this.props.match.params.id != this.state.albums.id) {
  //     typicodeApiCall("photos", `?userId=1`).then(res => {
  //       this.setState({ albums: res });
  //     });
  //   }
  // }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <GridList cellHeight={180} className={classes.gridList}>
          <GridListTile key="Subheader" cols={2} style={{ height: "auto" }}>
            <Subheader component="div">Album name will go here</Subheader>
          </GridListTile>
          {this.state.photos.map(photo => (
            <GridListTile key={photo.id}>
              <img src={photo.thumbnailUrl} alt={photo.title} />
              <GridListTileBar
                title={photo.title}
                subtitle={<span>by: name will go here</span>}
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    );
  }
}

Photos.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Photos);
