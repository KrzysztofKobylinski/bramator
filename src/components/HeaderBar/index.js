import React, { Component } from 'react'
import _ from 'lodash'
import Scrollchor from 'react-scrollchor'

import Narrow from '../Narrow/'
import Sticky from '../Sticky/'

import './index.scss'

export default class HeaderBar extends Component {
  render() {
    const { logo, links } = this.props

    return (
      <Sticky>
        <div className="headerBarWrapper">
          <Narrow>
            <div className="headerBar">
              {logo}
              <div className="links">
                {_.map(links, (link, index) => (
                  <Scrollchor key={index} to={link.link} className="link">
                    {link.name}
                  </Scrollchor>
                ))}
              </div>
            </div>
          </Narrow>
        </div>
      </Sticky>
    )
  }
}
