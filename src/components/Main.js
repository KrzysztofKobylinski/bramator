import React, { Component } from 'react'
import _ from 'lodash'
import './styles/slick.css'

import '../App.scss'

export default class Main extends Component {
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
      <div className="routeContent">
        <div>
          <h2> Single Item</h2>
          {_.map(new Array(20), (i) => this.renderLorem())}
          
        </div>
      </div>
    )
  }
}
