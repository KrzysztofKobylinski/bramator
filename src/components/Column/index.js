import React, { Component } from 'react'
import './index.scss'

export default class Column extends Component {
  
  render() {
    return (
      <div 
        className='column'
        style={{
          gridTemplateColumns: this.props.columns,
          gridGap: this.props.gap
        }}
      >
        {this.props.children}
      </div>
    )
  }
}
