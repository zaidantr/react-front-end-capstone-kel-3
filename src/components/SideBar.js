import React, { useState } from 'react'

import { SideBarData } from './SideBarData'
import logo from '../assets/logo.svg'

export default function Sidebar() {

    const [isHovering, setIsHovering] = useState(false);

    const handleMouseEnter = () => {
      setIsHovering(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovering(false);
    };    

  return (
    <div
    style={{
        height: '1024px',
        width: '400px',
        backgroundColor: '#F27370',
        paddingTop: '227px',
        paddingLeft: '60px',
        paddingRight: '60px',
    }}
    >
        <img 
        src={logo}
        style={{
            width: '243px',
            height: '65px',
            marginBottom: '45px'
        }}
        />
        <ul
        style={{
            height: 'auto',
            width: '100%',
            backgroundColor: '#F27370',
        }}
        >
            {SideBarData.map((val, key)=> {
                return (
                    <li 
                    style={{
                        height: '43px',
                        width: '100%',
                        borderBottom: '1px solid white',
                        // paddingLeft: '20px',
                        display: 'flex',
                        flexDirection: 'row',
                        color: 'white',
                        fontSize: '20px',
                        cursor: isHovering ? 'pointer' : '',
                        // backgroundColor: isHovering ? 'aqua' : '',
                    }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    key={key}
                    onClick={() => {
                        window.location.pathname = val.link;
                    }}
                    >  
                        {" "}
                        <div>
                            {val.title}
                        </div>
                    </li>
                    )
                })}
        </ul>
    </div>
  )
}
