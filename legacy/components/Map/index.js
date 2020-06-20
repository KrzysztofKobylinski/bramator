import React, { Component } from 'react'
import './index.scss'

export default class Map extends Component {
  render() {
    return (
      <iframe
        className= "map"
        title="map"
        src={this.props.src}
      />
    )
  }
}
