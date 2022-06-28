import React from 'react';
import logo from '../../assets/logo.svg';
import AppStore from '../../assets/AppStore.svg'
import GooglePlay from '../../assets/GooglePlay.svg'
import instagram from '../../assets/instagram.svg'
import twitter from '../../assets/twitter.svg'
import facebook from '../../assets/facebook.svg'
import linkedin from '../../assets/linkedln.svg'


export default function Footer() {
  return (
    <div
    style={{
        width: '1440px',
        backgroundColor: '#F27370',
    }}
    >
        <div
        style={{
            width: '1314px',
            display: 'flex',
            flexDirection: 'row',
            margin: '80px 66px 0 66px',
        }}
        >
            <div
            style={{
                width: '697px',
                height: '174px',
                marginTop: '80px',
                borderBottom: 'border: 1px solid #FDFDFD0',
            }}
            >
                <img src={logo} 
                style={{
                    height:'38px'
                }}
                />
                <p
                style={{
                    fontWeight: '400',
                    fontSize: '20px',
                    lineHeight: '23px',
                    marginTop: '16px',
                    color: '#FAFAFA',
                    opacity: 0.5,
                }}
                >A-A Gym is Indonesia's leading healthy lifestyle application that provides easy access and solutions for your healthy lifestyle</p>
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
            
            <div
            style={{
                width: '106px',
                height: '182px',
                display: 'flex',
                color: '#FAFAFA',
                marginTop: '80px',
                marginLeft: '104px',

            }}
            >
                <ul
                style={{
                    color: '#FAFAFA',
                    display: 'flex',
                    fontSize: '16px',
                    fontWeight: '400',
                    flexDirection: 'column',
                }}
                >
                    <li
                    style={{
                        fontWeight: '500',
                        fontSize: '24px',
                        lineHeight: '28px', 
                        marginBottom: '14px', 
                    }}
                    >
                        A-A GYM
                    </li>
                    <li
                    style={{
                        fontWeight: '400',
                        fontSize: '16px',
                        lineHeight: '19px',
                    }}
                    >
                        Home
                    </li>
                    <li
                    style={{
                        fontWeight: '400',
                        fontSize: '16px',
                        lineHeight: '19px',
                        marginTop: '21px',
                    }}                    >
                        About
                    </li>
                    <li
                    style={{
                        fontWeight: '400',
                        fontSize: '16px',
                        lineHeight: '19px',
                        marginTop: '21px',
                    }}                    >
                        Class
                    </li>
                    <li
                    style={{
                        fontWeight: '400',
                        fontSize: '16px',
                        lineHeight: '19px',
                        marginTop: '21px',

                    }}                    >
                        Download
                    </li>
                </ul>            
            </div>

            <div
            style={{
                height:'174px',
                weight: '152px',
                display: 'flex',
                marginTop: '80px',
                marginLeft: '100px', 
                display: 'flex',
                flexDirection: 'column',           
            }}
            >
                <h1
                style={{
                    fontWeight: '500',
                    fontSize: '24px',
                    lineHeight: '28px',
                    color: 'white',
                    marginBottom: '20px',
                }}
                >Follow Us</h1>
                <div
                >
                    
                </div>
                    <ul
                    style={{
                        display: 'flex',
                    }}
                    >
                        <li
                        style={{
                            width: '26px',
                            height: '26px',
                        }}
                        >
                            <a>
                                <img src={instagram} />
                            </a>
                        </li>
                        <li
                        style={{
                            width: '26px',
                            height: '26px',
                            marginLeft: '16px',
                        }}
                        >
                            <a>
                                <img src={twitter} />
                            </a>
                        </li>
                        <li
                        style={{
                            width: '26px',
                            height: '26px',
                            marginLeft: '16px',
                        }}                    >
                            <a>
                                <img src={facebook} />
                            </a>
                        </li>
                        <li
                        style={{
                            width: '26px',
                            height: '26px',
                            marginLeft: '16px',
                        }}                    >
                            <a>
                                <img src={linkedin} />
                            </a>
                        </li>
                    </ul>
            </div>
        </div> 

        <div
        style={{
            width: '1314px',
            display: 'flex',
            flexDirection: 'row',
            margin: '37px 66px 0 60px',
            borderTop: '1px solid #FDFDFD',
        }}
        >
            <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                marginTop: '16px',
            }}
            >
                <div
                
                />
                    <h1
                    style={{
                        fontWeight: '400',
                        fontSize: '15px',
                        lineHeight: '20px',                   
                        letterSpacing: '-0.204545px',                    
                        color: '#FEFEFE',
                        opacity: 0.5,
                    }}
                    >
                        Copyright © 2022. A-A Gym. All rights reserved.
                    </h1>
                </div>

            <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                marginTop: '16px',
                marginLeft: '729px',
            }}
            >
                <ul
                style={{
                    display: 'flex',
                    fontWeight: '400',
                    fontSize: '15px',
                    lineHeight: '20px',
                    letterSpacing: '-0.204545px',
                    color: '#FDFDFD',
                }}
                >
                    <li
                    style={{
                    }}
                    >
                        Terms & Conditions
                    </li>
                    <li
                    style={{
                        marginLeft: '39px',
                    }}                    
                    >
                        Privacy Policy
                    </li>
                </ul>
            </div>

        </div>
    </div>        
    )
}
