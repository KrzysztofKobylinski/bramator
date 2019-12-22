import React, { Component } from 'react'
import _ from 'lodash'
import './index.scss'

const DEBUG = true

export default class Lorem extends Component {
  renderLorem() {
    return (
      <p>
        Pariatur ipsum aute aute aute dolore anim laboris cupidatat. Aliqua anim labore labore tempor nisi duis velit
        quis irure reprehenderit. Officia dolore dolor velit aliquip non ea. Ipsum esse amet laborum id mollit commodo
        id excepteur. Quis pariatur incididunt esse id irure. Ad ullamco laboris et elit occaecat mollit deserunt.
        Consectetur excepteur ipsum ea cupidatat laborum quis ut laborum magna non ullamco minim. Deserunt eu ad aliquip
        eu officia. Qui non fugiat anim elit culpa. Et voluptate anim proident elit qui officia adipisicing. Dolor anim
        consequat laboris esse velit Lorem cupidatat nulla. Fugiat aute dolor non dolore velit in aute dolor. Ad elit
        qui cupidatat id.
      </p>
    )
  }
  render() {
    return (
      <div
        className="lorem"
        style={DEBUG ? {
          borderStyle: 'solid',
          borderWidth: '1px',
          borderColor: 'red'
        }: {}}
      >
        {_.map(new Array(this.props.count), (i, index) => (
          <div key={index}>{this.renderLorem()}</div>
        ))}
      </div>
    )
  }
}
