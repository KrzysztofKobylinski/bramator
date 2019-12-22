import React, { Component } from 'react'
import _ from 'lodash'
import Header from '../Header/'

import './index.scss'


export default class Paragraph extends Component {
  render() {
    return (
      <div className="paragraphWrapper">
        <Header>{this.props.header}</Header>
        {_.map(this.props.text, (singleText, index) => (
          <p key={index} className="paragraph">
            {singleText}
          </p>
        ))}
      </div>
    )
  }
}
