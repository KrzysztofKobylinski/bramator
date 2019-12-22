import React, { Component, Fragment } from 'react'
import Lorem from '../../components/Lorem/'
import Narrow from '../../components/Narrow/'

import Column from '../../components/Column/'

import HeaderBar from '../../components/HeaderBar/'
import Footer from '../../components/Footer/'


export default class Main extends Component {
  render() {
    return (
      <Fragment>
        <HeaderBar
          logo={<div>Superfirma</div>}
          links={[
            {
              name: 'Home',
              link: '#'
            },
            {
              name: 'Contact',
              link: '#contact'
            }
          ]}
        />

        <div>
          <Lorem count={5} />
        </div>
        <Column>
          <Lorem count={5} />
          <Lorem count={3} />
        </Column>
        <div id="random">
          <Narrow>
            <Lorem count={5} />
          </Narrow>
        </div>
        <div id="contact">
          <Narrow>
            <Column columns="5fr 6fr">
              <Lorem count={5} />
              <Lorem count={3} />
            </Column>
          </Narrow>
        </div>
        <Footer
					logo={<div>Superfirma</div>}
					credits={true}
          links={[
            {
              name: 'Scroll to top',
              link: '#'
            },
          ]}
        />
      </Fragment>
    )
  }
}
