import React, { Component } from "react";
import Slider from "react-slick";

import "./styles/slick.css";

import "../App.css";

export default class Main extends Component {
  render() {
    const settings = {
      dots: true
    };
    return (
      <div className="routeContent">
        <div>
          <h2> Single Item</h2>
          <Slider {...settings}>
            <div>
              <img src="http://placekitten.com/g/400/200" />
            </div>
           
          </Slider>
        </div>
      </div>
    );
  }
}
