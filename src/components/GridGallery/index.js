import React, { Component } from "react";
import { SRLWrapper } from 'simple-react-lightbox'


import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';



export default class Responsive extends Component {
  render() {
    return (
      <SRLWrapper>
        <GridList cellHeight={160} className={this.props.classes.gridList} cols={3}>
          {this.props.grid.map((tile) => (
            <GridListTile key={tile.img} cols={tile.cols || 1}>
              <img src={tile.img} alt={tile.title} />
            </GridListTile>
          ))}
        </GridList>
      </SRLWrapper>
    );
  }
}