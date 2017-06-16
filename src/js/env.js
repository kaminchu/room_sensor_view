import React, { Component } from 'react';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';


const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 450,
    overflowY: 'auto',
  },
  data: {
    color: "",
    fontSize: "1rem",
    lineHeight: 1.5,
    left: ".15em",
    display: "block",
    textAlign: "center",
    fontWeight: 700,
    whiteSpace: "nowrap",
    position: "absolute",
    top: "50%",
    userSelect: "none",
    fontFamily: "inherit"
  }
};

const tilesData = [
  {
    title: '気温',
    value: '25℃'
  },
  {
    title: '湿度',
    value: '58%'
  },
  {
    title: '気圧',
    value: '1013hPa'
  }
];

/**
 * A simple example of a scrollable `GridList` containing a [Subheader](/#/components/subheader).
 */

class GridListExampleSimple extends Component {
  render() {
    return (
      <div style={styles.root}>
        <GridList cellHeight={180} style={styles.gridList}>
          {tilesData.map((tile, idx) => (
            <GridTile key={idx}>
              <span style={styles.data}>{tile.value}</span>
            </GridTile>
          ))}
        </GridList>
      </div>
    );
  }

}


export default GridListExampleSimple;