import React from 'react';
import about from '../../assets/about.svg'

export default function About() {
  return (
    <div
    style={{
        width: '1440px',

    }}
    >
        <div
        style={{
            width: '1096px',
            display: 'flex',
            flexDirection: 'row',
            margin: '112px 172px 0 172px',
        }}
        >
            <div
            style={{
                width: '469px',
            }}
            >
                <img src={about}
                style={{
                    width: '469px',
                    height: '678px',
                }}
                />
            </div>

            <div
            style={{
                width: '596px',
                marginLeft: '36px',
                marginTop: '146px',
            }}
            >
                <h1
                style={{
                    fontWeight: '700',
                    fontSize: '42px',
                    lineHeight: '64px',
                }}
                >
                    About A-A Gym Apps
                </h1>
                <p
                style={{
                    fontWeight: '400',
                    fontSize: '20px',
                    lineHeight: '150%',
                    color: '#707070',
                }}
                >
                A-A Gym is Indonesia's leading healthy lifestyle application that provides easy access and solutions for your healthy lifestyle. search, book, order, and be healthier with your healthy life partner.
                </p>
                <p
                style={{
                    fontWeight: '400',
                    fontSize: '20px',
                    lineHeight: '150%',
                    color: '#707070',
                }}
                >
                all trainers in the A-A gym are professional trainers in their fields because we want all those who attend the A-A gym class to be able to apply the right exercise according to their goals
                </p>

                <a
                style={{
                    marginTop: '49px',
                    padding: '10px 14px',
                    backgroundColor: '#F27370',
                    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.05)',
                    borderRadius: '8px',
                    color: 'white',
                    fontWeight: '700',
                    fontSize: '24px',
                    lineHeight: '28px',
                }}
                >
                    Download Now
                </a>

            </div>
        </div>
        
    </div>
  )
}
