import React, { Component } from 'react'
import './index.scss'

export default class Narrow extends Component {
  
  render() {
    return (
      <div className='narrow'>
        {this.props.children}
      </div>
    )
  }
}
