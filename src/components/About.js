import React, { Component } from 'react'

import '../App.scss'

export default class About extends Component {
  render() {
    return (
      <div className="routeContent">
        O nas
        <iframe
          width="600"
          height="450"
          frameBorder="0"
          // style={{'border:0'}}

          src="https://www.google.com/maps/embed/v1/search?q=Bramator.%20FHU.%20Paw%C5%82owski%20G.T.%2C%20Ignacego%20Krasickiego%2C%20Nowa%20Iwiczna%2C%20Poland&key=AIzaSyALIgyRsfOQuOHAd3jqu0gOCx3PU9SFKUw"
          allowFullScreen
        />
      </div>
    )
  }
}
