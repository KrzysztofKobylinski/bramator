import React, { Component } from 'react'
import './index.scss'

export default class SmallFont extends Component {
  render() {
    const { children } = this.props
    return <div className="smallFont">{children}</div>
  }
}
