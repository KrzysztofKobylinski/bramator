import React, { Component } from 'react'
import './index.scss'

export default class Header extends Component {
  render() {
    const { children } = this.props
    return <div className="header">{children}</div>
  }
}
