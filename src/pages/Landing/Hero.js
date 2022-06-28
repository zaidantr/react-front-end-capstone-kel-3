import React from 'react'
import heroImage from '../../assets/hero.svg'
import AppStore from '../../assets/AppStore.svg'
import GooglePlay from '../../assets/GooglePlay.svg'

export default function Hero() {
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
            margin: '40px 172px 0 172px',
        }}
        >
            <div
            style={{
                width: '560px',
            }}
            >
                <h1
                style={{
                    fontWeight: '700',
                    fontSize: '64px',
                    lineHeight: '75px',
                    color: '#161616',
                }}
                >Moving Your Mind Body & Soul</h1>
                <h3
                style={{
                    fontWeight: '400',
                    fontSize: '32px',
                    lineHeight: '38px',
                    color: '#585858',
                }}
                >Stay healthy, get daily workouts with A-A gym platform</h3>
                <div
                style={{
                    marginTop: '56px',
                }}
                >
                    <button>
                        <img src={GooglePlay} />
                    </button>
                    <button
                    style={{
                        marginLeft: '24px',
                    }}
                    >
                        <img src={AppStore} />
                    </button>
                </div>

            </div>

            <div
            style={{
                marginLeft: '92px',
            }}
            >
                <img src={heroImage} />
            </div>

        </div>

    </div>


      )
}
