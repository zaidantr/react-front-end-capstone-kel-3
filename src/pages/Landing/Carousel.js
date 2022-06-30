import React, { Component } from "react";
import Slider from "react-slick";
import './Carousel.css';
import weightloss from '../../assets/weightloss.svg'
import weightlifting from '../../assets/weightlifting.svg'
import yoga from '../../assets/yoga.svg'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function Testimony() {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500
      };
  return (
    <>
    <div
    style={{
        width: '1440px',

    }}
    >
        <div
        style={{
            width: '1096px',
            display: 'flex',
            flexDirection: 'column',
            margin: '80px 172px 32px 172px',
        }}
        >
            <h1
            style={{
                fontWeight: '700',
                fontSize: '42px',
                lineHeight: '64px',
                textAlign: 'center',
                justifyContent: 'center',
            }}
            >Discover All Our Gym Class</h1>
            <p
            style={{
                fontWeight: '400',
                fontSize: '24px',
                lineHeight: '28px',
                textAlign: 'center',
                justifyContent: 'center',
                color: '#585858',
            }}
            >Thousand of gym classes, all in one app</p>
        </div>
        
        <div
        >
        <Slider {...settings}>
          <div
          className="container"
          >
            <img src={weightloss} />
            <h3>Weight Loss Class</h3>
            <p>Weightlifting is the sport of Strength, Power, Speed and Precision. </p>
            <button>Join Now</button>
          </div>
          <div
          className="container"
          >
            <img src={weightlifting} />
            <h3>Weight Lifting Class</h3>
            <p>Weightlifting is the sport of Strength, Power, Speed and Precision. </p>
            <button>Join Now</button>
          </div>
          <div
          className="container"
          >
            <img src={yoga} />
            <h3>Yoga Class</h3>
            <p>Weightlifting is the sport of Strength, Power, Speed and Precision. </p>
            <button>Join Now</button>
          </div>
          <div
          className="container"
          >
            <img src={weightloss} />
            <h3>Weight Loss Class</h3>
            <p>Weightlifting is the sport of Strength, Power, Speed and Precision. </p>
            <button>Join Now</button>
          </div>
          <div
          className="container"
          >
            <img src={weightlifting} />
            <h3>Weight Lifting Class</h3>
            <p>Weightlifting is the sport of Strength, Power, Speed and Precision. </p>
            <button>Join Now</button>
          </div>
          <div
          className="container"
          >
            <img src={yoga} />
            <h3>Yoga Class</h3>
            <p>Weightlifting is the sport of Strength, Power, Speed and Precision. </p>
            <button>Join Now</button>
          </div>

        </Slider>
      </div>

    </div>

    </>
  )
}
