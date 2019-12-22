import React, { Component } from 'react'
import './index.scss'

export default class Section extends Component {
  render() {
    return <div 
      className="section"
      style={{
          textAlign: `${this.props.alignRight ? 'end': 'start'}`
        }}
      
      >{this.props.children}</div>
  }
}
