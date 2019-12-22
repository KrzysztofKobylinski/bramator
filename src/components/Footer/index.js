import React, { Component } from 'react'
import _ from 'lodash'
import Scrollchor from 'react-scrollchor'

import Narrow from '../Narrow/'

import './index.scss'

export default class Footer extends Component {
  render() {
    const { logo, links, credits } = this.props

    return (
        <div className="footerWrapper">
          <Narrow>
            <div className="footer">
              {logo}

              {credits ? <div className="credits">
                Made with ❤️ by Krzysztof Kobyliński
              </div> : ''}
              
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
    )
  }
}
