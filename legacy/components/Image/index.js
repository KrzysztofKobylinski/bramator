import React, { Component } from 'react'
import './index.scss'

export default class Image extends Component {
  render() {
    return (
      <div
        className='image'
        onClick={this.props.onClick}
        style={{
          backgroundImage: `url(${this.props.src})`
        }}
      />
    )
  }
}
