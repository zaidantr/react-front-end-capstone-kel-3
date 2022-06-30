import React from 'react';
import time from '../../assets/time-logo.svg';
import trainer from '../../assets/trainer-logo.svg';

export default function Info() {
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
            margin: '120px 172px 0 172px',
        }}
        >
            <div
            style={{
                width: '352px',
            }}
            >
            <img src={time} 
            style={{
                width: '64px',
                height: '64px',
                marginBottom: '8px',
            }}
            />
            <h1
            style={{
                fontWeight: '500',
                fontSize: '24px',
                lineHeight: '28px',
            }}
            >
            Flexible Time</h1>
            <p
            style={{
                fontWeight: '400',
                fontSize: '20px',
                lineHeight: '23px',
                color: '#969696',
            }}
            >Choose your schedule class with A-A Gym platfrom</p>
            </div>

            <div
            style={{
                width: '352px',
                marginLeft: '20px',
            }}
            >
            <img src={trainer} 
            style={{
                width: '64px',
                height: '64px',
                marginBottom: '8px',
            }}
            />
            <h1
            style={{
                fontWeight: '500',
                fontSize: '24px',
                lineHeight: '28px',
            }}
            >
            Profesional Trainer</h1>
            <p
            style={{
                fontWeight: '400',
                fontSize: '20px',
                lineHeight: '23px',
                color: '#969696',
            }}
            >Stay healthy, exercise with a professional trainer</p>
            </div>

            <div
            style={{
                width: '352px',
                marginLeft: '20px',
            }}
            >
            <img src={time} 
            style={{
                width: '64px',
                height: '64px',
                marginBottom: '8px',
            }}
            />
            <h1
            style={{
                fontWeight: '500',
                fontSize: '24px',
                lineHeight: '28px',
            }}
            >
            Flexible Time</h1>
            <p
            style={{
                fontWeight: '400',
                fontSize: '20px',
                lineHeight: '23px',
                color: '#969696',
            }}
            >Choose your schedule class with A-A Gym platfrom</p>
            </div>

        </div>
    </div>

  )
}
