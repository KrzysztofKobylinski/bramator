import React, { Component } from 'react'
import './index.scss'

export default class Center extends Component {
  render() {
    return <div className="center">{this.props.children}</div>
  }
}
