import React, { Component } from 'react'
import './index.scss'

export default class Spacing extends Component {
  render() {
    return <div 
      className="spacing"
      style={{
          height: `${this.props.height}px`
        }}
      
      />
  }
}
