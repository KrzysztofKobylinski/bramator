import React, { Component } from "react";
import Slider from "react-slick";
import Typography from '@material-ui/core/Typography';

import './index.css';

var settings = {
  dots: false,
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 2000,
  cssEase: "linear",
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

export default class Responsive extends Component {
  render() {
    return (
      <Slider {...settings}>
        {this.props.data.map((item) => <div className={this.props.classes.carouselItem} style={{display: 'flex'}}>
          <a href={item.url}>
            <img style={{height: 100, maxWidth: 250}} src={item.img} />
          </a>
        </div>
        )}
      </Slider>
    );
  }
}