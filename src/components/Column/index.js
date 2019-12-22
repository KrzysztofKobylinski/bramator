import React, { Component } from 'react'
import './index.scss'

export default class Column extends Component {
  
  render() {
    return (
      <div 
        className='column'
        style={{
          gridTemplateColumns: this.props.columns
        }}
      >
        {this.props.children}
      </div>
    )
  }
}
