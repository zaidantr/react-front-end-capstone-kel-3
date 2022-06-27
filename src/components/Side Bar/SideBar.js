import { SideBarData } from './SideBarData'
import './SideBar.css'
import logo from '../../assets/logo.svg'
import avatar from '../../assets/avatar.svg'

export default function Sidebar() {

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
            alt='avatar'
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
        height: '1124px',
        width: '400px',
        backgroundColor: '#F27370',
        paddingTop: '227px',
        paddingLeft: '60px',
        paddingRight: '60px',
    }}
    >
    
        <img 
        alt='Logo'
        src={logo}
        style={{
            width: '243px',
            height: '65px',
            marginBottom: '45px'
        }}
        />
        <ul
        // style={{
        //     height: 'auto',
        //     width: '100%',
        //     backgroundColor: '#F27370',
        // }}
        className='SidebarList'
        >
            {SideBarData.map((val, key)=> {
                return (
                    <li 
                    className='row'
                    key={key}
                    onClick={() => {
                        window.location.pathname = val.link;
                    }}
                    >  
                        {" "}
                        <div
                        >
                            {val.title}
                        </div>
                    </li>
                    )
                })}

            <li
            className='row'
            style={{
                height: '43px',
                width: '100%',
                borderBottom: '1px solid white',
                paddingBottom: '60px',
                marginTop: '',
                display: 'flex',
                flexDirection: 'row',
                color: 'white',
                fontSize: '20px',
                cursor: 'pointer',
            }}
            onClick={() => {
                window.location.pathname = '/offline-class-booking';
            }}
            >
                Manage Offline Class Booking
            </li>

            <li
            className='row'
            style={{
                width: '100%',
                borderBottom: '1px solid white',
                marginTop: '',
                display: 'flex',
                flexDirection: 'row',
                color: 'white',
                fontSize: '20px',
                cursor: 'pointer',
            }}

            onClick={() => {
                window.location.pathname = '/online-class';
            }}
            >
                Manage Online Class
            </li>
            <li
            className='row'
            style={{
                height: '43px',
                width: '100%',
                paddingBottom: '60px',
                marginTop: '',
                display: 'flex',
                flexDirection: 'row',
                color: 'white',
                fontSize: '20px',
                cursor: 'pointer',
            }}

            onClick={() => {
                window.location.pathname = '/online-class-booking';
            }}
            >
                Manage Online Class Booking
            </li>
            
            <li
            className='row'
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
            }}
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
