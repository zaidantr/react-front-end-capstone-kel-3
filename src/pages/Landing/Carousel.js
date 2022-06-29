import React from 'react';
import './Carousel.css';
import weightloss from '../../assets/weightloss.svg'
import weightlifting from '../../assets/weightlifting.svg'
import yoga from '../../assets/yoga.svg'

export default function Testimony() {
    
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
        className='slide-container'
        >
            <span className='slider-span' id='slider-span1' ></span>
            <span className='slider-span' id='slider-span2' ></span>
            <span className='slider-span' id='slider-span3' ></span>

            <div className='image-slider'>
                <div className='slides-div' id='slide-1'>
                    <img src={weightlifting} className='img' id='img1' />
                    <a href='#slider-span1' className='button' id='button-1'></a>
                </div>
                <div className='slides-div' id='slide-2'>
                    <img src={weightloss} className='img' id='img2' />
                    <a href='#slider-span2' className='button' id='button-2'></a>
                </div>
                <div className='slides-div' id='slide-3'>
                    <img src={yoga} className='img' id='img3' />
                    <a href='#slider-span3' className='button' id='button-3'></a>
                </div>
            </div>

        </div>
    </div>

    </>
  )
}
