import React, { Component, Fragment } from 'react'

import { 
	Column, 
	Footer, 
	Header, 
	HeaderBar, 
	Lorem,
	Map, 
	Narrow, 
	SmallFont,
	Image,
	Paragraph
} from '../../components/'


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

        <Header>Nagłówek</Header>
        <SmallFont>Malutki</SmallFont>
        <Lorem count={5} />
        <Column columns="20fr 6fr">
          <Image src="https://images.unsplash.com/photo-1544612318-bcab56ed6311?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" />
          <Lorem count={1} />
        </Column>
        <Column>
          <Lorem count={5} />

						<Paragraph
							header= 'Paragraph'
							text={[
								'sdasdasdasd'
							,
								'sdfsdfsdfsdfsdfsdf'
							, 
								'pofkdgopkfdpo'
							]}
						/>

        </Column>
        <Image src="https://gamingsociety.pl/wp-content/uploads/2019/04/windows-xp.jpg" />
        <div id="random">
          <Narrow>
            <Lorem count={5} />
          </Narrow>
        </div>
        <div id="contact">
          <Column columns="5fr 6fr">
            <Lorem count={2} />
            <Map />
          </Column>
        </div>
        <Lorem count={3} />
        <Footer
          logo={<div>Superfirma</div>}
          credits={true}
          links={[
            {
              name: 'Scroll to top',
              link: '#'
            }
          ]}
        />
      </Fragment>
    )
  }
}
