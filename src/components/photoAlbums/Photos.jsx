import typicodeApiGET from "../../helperFunctions/typicodeGet.js";
import { Component } from "react";

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
    backgroundColor: theme.palette.background.paper,
    margin: theme.spacing.unit * 2,
    width: "auto"
  },
  gridListMobile: {
    maxWidth: 600
  },
  gridListDesktop: {
    maxWidth: 1250
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)"
  }
});

class Photos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      albumName: ""
    };
  }

  componentDidMount() {
    typicodeApiGET("photos", `?albumId=${this.props.match.params.id}`).then(
      res => {
        this.setState({ photos: res });
      }
    );
    typicodeApiGET("albums", `?id=${this.props.match.params.id}`).then(res => {
      this.setState({ albumName: res[0].title });
    });
  }

  render() {
    const { classes } = this.props;

    const isDesktop = this.props.isDesktop;

    return (
      <div className={classes.root}>
        <GridList
          cellHeight={180}
          className={
            isDesktop ? classes.gridListDesktop : classes.gridListMobile
          }
        >
          <GridListTile key="Subheader" cols={4} style={{ height: "auto" }}>
            <Subheader component="div">{this.state.albumName}</Subheader>
          </GridListTile>
          {this.state.photos.map(photo => (
            <GridListTile
              key={photo.id}
              cols={4}
              style={{ maxWidth: isDesktop ? 300 : 150 }}
            >
              <img
                src={isDesktop ? photo.url : photo.thumbnailUrl}
                alt={photo.title}
              />
              <GridListTileBar title={photo.title} />
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
