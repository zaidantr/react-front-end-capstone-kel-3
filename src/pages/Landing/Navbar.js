import React from 'react'
import logonav from '../../assets/logo-login.svg'

export default function Navbar() {
  return (
    <div 
    style={{
      width: '1440px',
    }}>
        <div
        style={{
            display: 'flex',
            flexDirection: 'row',
        }}
        >
            <div>
             <img src={logonav}
             style={{
                width: '174px',
                height: '38px',
                margin: '25px 0 25px 60px',
             }}
             />

            </div>
            <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                marginLeft: '742px',
                marginRight: '62px'
            }}
            >
                <ul
                style={{
                    display: 'flex',
                    margin: '25px 0 25px 60px',
                    fontSize: '16px',
                    fontWeight: '400',

                }}
                >
                    <li
                    style={{
                        marginLeft: '69px',
                    }}
                    >
                        <a>
                            Home
                        </a>
                    </li>
                    <li
                    style={{
                        marginLeft: '69px',
                    }}                    >
                        <a>
                            About
                        </a>
                    </li>
                    <li
                    style={{
                        marginLeft: '69px',
                    }}                    >
                        <a>
                            Class
                        </a>
                    </li>
                    <li
                    style={{
                        marginLeft: '69px',
                    }}                    >
                        <a>
                            Download
                        </a>
                    </li>
                </ul>
            </div>

        </div>

    </div>
         );
    }
     
