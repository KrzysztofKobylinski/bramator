import React, { Component } from 'react'
import './index.scss'

export default class Button extends Component {
  render() {
    return (
      <div className="button">
        <a href={this.props.to}>{this.props.children}</a>
      </div>
    )
  }
}
