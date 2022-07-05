import 'antd/dist/antd.css';
import '../../App.css';
import {Table, Button, Modal, Input, Form } from 'antd';
import { useState} from 'react';
import '../../components/antd.css'
import active from '../../assets/active-users.svg';
import booking from '../../assets/total-booking.svg';
import admin from '../../assets/total-admin.svg';
import filter from '../../assets/filter.svg';
import search from '../../assets/search.svg';
import Sidebar from '../../components/Side Bar/SideBar';

export default function Home() {
  const { Search } = Input;
  const [openDelete, setOpenDelete] = useState(false);
  const [deleteId, setDeleteId] = useState(-1);
  const [isEditing, setIsEditing] = useState(false);
  const [editingOnlineClass, setEditingOnlineClass] = useState(null);

  const handleOk = () => {
    setOpenDelete(false);
  };

  const handleCancel = () => {
    setOpenDelete(false);
  };

  const [dataSource, setDataSource] = useState([
    {
      id: 1,
      nameClass: 'Zumba',
      typeClass: 'Online',
      trainer: 'John55',
      price: 'Rp 300.000',
      totalJoined: '12'
    }, 
    {
      id: 2,
      nameClass: 'Gym',
      typeClass: 'Online',
      trainer: 'David55',
      price: 'Rp 300.000',
      totalJoined: '12',
    }, 
    {
      id: 3,
      nameClass: 'Weightlifting',
      typeClass: 'Online',
      trainer: 'Sam55',
      price: 'Rp 300.000',
      totalJoined: '12',
    }, 
    {
      id: 4,
      nameClass: 'Running',
      typeClass: 'Online',
      trainer: 'Will55',
      price: 'Rp 300.000',
      totalJoined: '12'
    }, 
    
  ]);

  const columns = [
    {
      key: '1',
      title: 'Name Class',
      dataIndex: 'nameClass',
    },
    {
      key: '2',
      title: 'Type Class',
      dataIndex: 'typeClass',
    },
    {
      key: '3',
      title: 'Trainer',
      dataIndex: 'trainer',
    },
    {
      key: '4',
      title: 'Price',
      dataIndex: 'price',
    },
    {
      key: '5',
      title: 'Total Joined',
      dataIndex: 'totalJoined',
    },
  ];

   return (
    <>
    <div
    style={{
      position: 'absolute',
    }}
    >
      <Sidebar/>
    </div>

    <div 
    className="container-home"
    style={{
      marginLeft: '400px',
    }}
    >
    <h1
    style={{
        // backgroundColor: 'black',
        paddingLeft: 62,
        paddingRight: 60,
        paddingTop: '140px',
        fontSize: '32px',
        fontWeight: 'bold',

    }}
    >Welcome back Super Admin</h1>

    <div
    className='dashboard'
    style={{
        display: 'flex',
        minWidth: 1046,
        // backgroundColor: 'black',
        paddingLeft: 62,
        paddingRight: 60,
    }}
    >
        
    
        <div
        // className='container'
        style={{
            width: 295,
            background: 'linear-gradient(180deg, #F27370 0%, #346BB7 100%)',
            borderRadius: '8px',
            display: 'flex',
            padding: '33px 29.5px',
        }}
        >
            <div 
            // className='logo'
            >
                <img 
                src={active}
                style={{
                    width: '75px',
                    height: '75px',
                }}

                />
            </div>

            <div 
            // className='content'
            style={{
                marginLeft: '26px',
            }}
            >
                <h1
                style={{
                    fontSize: '36px',
                    color: 'white',
                }}
                >200</h1>
                <h6
                style={{
                    fontSize: '20px',
                    color: 'white',
                }}
                >Active Users</h6>
            </div>
        </div>
        <div
        // className='container'
        style={{
            width: 295,
            background: 'linear-gradient(180deg, #F27370 0%, #346BB7 100%)',
            borderRadius: '8px',
            display: 'flex',
            padding: '33px 29.5px',
            marginLeft: '20px',
        }}
        >
            <div 
            // className='logo'

            >
                <img 
                src={booking} 
                style={{
                    width: '75px',
                    height: '75px',
                }}
                />
            </div>

            <div 
            // className='content'
            style={{
                marginLeft: '26px',
            }}
            >
                <h1
                style={{
                    fontSize: '36px',
                    color: 'white',
                }}
                >200</h1>
                <h6
                style={{
                    fontSize: '20px',
                    color: 'white',
                }}
                >Total Booking</h6>
            </div>
        </div>

        <div
        // className='container'
        style={{
            width: 295,
            background: 'linear-gradient(180deg, #F27370 0%, #346BB7 100%)',
            borderRadius: '8px',
            display: 'flex',
            padding: '33px 29.5px',
            marginLeft: '20px',
        }}
        >
            <div 
            // className='logo'
            >
                <img 
                src={admin}
                style={{
                    width: '75px',
                    height: '75px',
                }}

                />
            </div>

            <div 
            // className='content'
            style={{
                marginLeft: '26px',
            }}
            >
                <h1
                style={{
                    fontSize: '36px',
                    color: 'white',
                }}
                >200</h1>
                <h6
                style={{
                    fontSize: '20px',
                    color: 'white',
                }}
                >Total Admin</h6>
            </div>
        </div>

    </div>

    <div 
    className='table'
    style={{
        minWidth: 1046,
        // backgroundColor: 'black',
        paddingLeft: 62,
        paddingRight: 60,
        paddingTop: 56,
        marginLeft: '20px',
    }}>

      <h1
        style={{
          fontSize: "32px",
          fontWeight: "bold",
          // fontFamily: "Roboto",
        }}
        >
        Total Joined Class
      </h1>

        <div
             style={{
              border: '1px solid #F27370',
              paddingLeft: 23,
              paddingRight: 23,
            }}
        >

          <div
            style={{
              display: 'flex',
              paddingTop: '30px',
              color: 'black',
            }}
            >
            <div 
            style={{
              display: 'flex',
            }}
            >
              <a>
              <img
              src={filter}
              style={{
                marginTop: '3px',
                width: '20px',
                height: '20px',
              }}
              />
              </a>

              <h1
              style={{
                flexDirection: 'row',
                fontSize: '16px',
                color: '#F27370',
                marginLeft: '10px',
              }}
              >Filter</h1>
            </div>

            <div
            style={{
              margin: 'auto',
              paddingBottom: '30px',
              marginRight: '20px',
              // float: 'right',
            }}
            >
              <img
              src={search}
              style={{
                position: 'absolute',
                zIndex: '900',
                padding: '11.75px 0 12.75px 17.75px'
              }}
              />
              <Input
                placeholder="Search"
                allowClear
                style={{
                  width: '233px',
                  border:' 1px solid #F27370',
                  borderRadius: '4px',        
                  padding: '7.5px 39px', 
              }}
              />
            </div>

          </div>
          
            <Table
            columns={columns}
            dataSource={dataSource}
            style={{
              // paddingTop: 30,
              margin: 0,
            }}
            ></ Table>
        </div>

    </div>
    </div>
    </>
  );
}

