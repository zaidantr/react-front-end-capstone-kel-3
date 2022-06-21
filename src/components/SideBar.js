import React, { useState } from 'react'

import { SideBarData } from './SideBarData'
import logo from '../assets/logo.svg'
import avatar from '../assets/avatar.svg'

export default function Sidebar() {

    const [isHovering, setIsHovering] = useState(false);

    const handleMouseEnter = () => {
      setIsHovering(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovering(false);
    };    

  return (
    <>
    <div
    style={{
        position: 'absolute',
        marginLeft: '1186px',
        marginTop: '82px',
        float: 'right',
        color: 'black',
        display: 'flex',
    }}
    >
        <div
        style={{
            display: 'flex',
            flexDirection: 'row',
            width: '300px',
        }}
        >
            <img
            src={avatar}
            style={{
                width: '40px',
                height: '40px',
            }}
            />
            <h1
            style={{
                marginLeft: '20px',
                fontSize: '24px',
            }}
            >
            Super Admin
            </h1>
        </div>
        
    </div>
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

            <li
            style={{
                height: '43px',
                width: '100%',
                borderBottom: '1px solid white',
                paddingBottom: '70px',
                marginTop: '',
                display: 'flex',
                flexDirection: 'row',
                color: 'white',
                fontSize: '20px',
                cursor: 'pointer',
                backgroundColor: isHovering ? '#B65654' : '',
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => {
                window.location.pathname = '/offline-class-booking';
            }}
            >
                Manage Offline Class Booking
            </li>

            <li
            style={{
                height: '43px',
                width: '100%',
                borderBottom: '1px solid white',
                marginTop: '',
                display: 'flex',
                flexDirection: 'row',
                color: 'white',
                fontSize: '20px',
                cursor: 'pointer',
                backgroundColor: isHovering ? '#B65654' : '',
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => {
                window.location.pathname = '/online-class';
            }}
            >
                Manage Online Class
            </li>
            <li
            style={{
                height: '43px',
                width: '100%',
                borderBottom: '1px solid white',
                paddingBottom: '70px',
                marginTop: '',
                display: 'flex',
                flexDirection: 'row',
                color: 'white',
                fontSize: '20px',
                cursor: 'pointer',
                backgroundColor: isHovering ? '#B65654' : '',
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => {
                window.location.pathname = '/online-class-booking';
            }}
            >
                Manage Online Class Booking
            </li>
            
            <li
             style={{
                height: '43px',
                width: '100%',
                borderBottom: '1px solid white',
                marginTop: '200px',
                display: 'flex',
                flexDirection: 'row',
                color: 'white',
                fontSize: '20px',
                cursor: 'pointer',
                backgroundColor: isHovering ? '#B65654' : '',
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => {
                window.location.pathname = '/login';
            }}
            >
                Logout
            </li>
        </ul>
    </div>

    
    </>

  )
}
