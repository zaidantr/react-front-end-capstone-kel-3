import 'antd/dist/antd.css';
import '../../App.css';
import {Table, Button, Modal, Input, Form, DatePicker } from 'antd';
import { Box } from "@mui/system";
import { useEffect, useState} from 'react';
import '../../components/antd.css';
import Button1 from "@mui/material/Button";
import warning from '../../assets/warning.svg';
import fldClass from '../../assets/fld-class.svg';
import fldDate from '../../assets/fld-date.svg';
import fldTime from '../../assets/fld-time.svg';
import fldPrice from '../../assets/fld-price.svg';
import getAPI from "../../services/api/api";
import Sidebar from '../../components/Side Bar/SideBar';
// import { EditOutlined, DeleteOutlined, InfoCircleOutlined} from '@ant-design/icons';
// import { height } from '@mui/system';

export default function ManageOnlineClass() {
  const [openDelete, setOpenDelete] = useState(false);
  const [deleteId, setDeleteId] = useState(-1);
  const [isEditing, setIsEditing] = useState(false);
  const [isAddingOnlineClass, setIsAddingOnlineClass] = useState(false);
  const [editingOnlineClass, setEditingOnlineClass] = useState(null);
  const [newOnlineClass, setNewOnlineClass] = useState({});


  const handleOk = () => {
    setOpenDelete(false);
  };

  const handleCancel = () => {
    setOpenDelete(false);
  };

  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    const api = getAPI(true);
    api.getOfflineClassData().then((data) => setDataSource(data));
  }, []);

  const columns = [
    {
      key: '1',
      title: 'Name Class',
      dataIndex: 'nameClass',
    },
    {
      key: '2',
      title: 'Trainer',
      dataIndex: 'trainer',
    },
    {
      key: '3',
      title: 'Date',
      dataIndex: 'date',
    },
    {
      key: '4',
      title: 'Price',
      dataIndex: 'price',
    },
    {
      key: '5',
      title: 'Time',
      dataIndex: 'time',
      hidden: true,
    },
    {
      key: '6',
      title: 'Location',
      dataIndex: 'location',
      hidden: true,
    },
    {
      key: '7',
      title: 'Description',
      dataIndex: 'description',
      hidden: true,
    },
    {
      key: 8,
      title: 'Actions',
      render:(record) => {
        return <>
          <Button 
          id='btn-view-online-class'
          onClick={() => {
            info(record.id);
          }}
          style={{
            border: '1px solid #F27370',
            borderRadius: '4px',
            color: 'white',
            backgroundColor: '#F27370',
          }}
          >VIEW</Button>
          <Button
          id='btn-edit-online-class'
          onClick={() => {
            onEditOnlineClass(record);
          }}
          style={{
            border: '1px solid #F27370',
            borderRadius: '4px',
            color: 'white',
            backgroundColor: '#F27370',
            marginLeft: 12,
          }}
          >EDIT</Button>
          <Button 
          id='btn-delete-online-class'
          onClick={() => {
            setOpenDelete(!openDelete);
            setDeleteId(record.id);
      }}
          style={{
            border: '1px solid #F27370',
            borderRadius: '4px',
            color: 'white',
            backgroundColor: '#F27370',
            marginLeft: 12,
          }}
          >DELETE</Button>

        </>
      }
    } 
  ].filter(item => !item.hidden);

  const onEditOnlineClass = (record) => {
    setIsEditing(true);
    setEditingOnlineClass({...record});
  }

  const resetEditing=() => {
    setIsEditing(false);
    setEditingOnlineClass(null);
  }

  const resetAddOnlineClass=() => {
    setIsAddingOnlineClass(false);
    setNewOnlineClass({});
  }

  const info = (id) => {
    const viewData = dataSource.find(item =>  item.id === id)
    console.log(viewData, 'data')
    Modal.info({

      icon: '',
      title: '',
      okText:'Cancel',
      okId:'btn-cancel-view-online-class',
      okButtonProps: {
        type: "primary",
        style: {
          border: "2px solid #F27370",
          color: "#F27370",
          backgroundColor: "white",
          borderRadius: "8px",
          // paddingBottom: '2px',
        },
      },
      content: (
        <div
        style={{
          fontSize: '20px',
          // lineHeight: '23px',
          // fontFamily: 'Roboto',
          // fontWeight: '400px',
          // fontStyle: 'normal',
          // color: '#585858',
          // paddingTop:'34px',
        }}
        >
          <h1 
          style={{ fontSize: "26px" }}
          >View Class</h1>
          <p>Name Class <br></br> {viewData.nameClass} </p>
          <p>Trainer <br></br> {viewData.trainer}</p>
          <p>Date <br></br> {viewData.date}</p>
          <p>Time <br></br> {viewData.time}</p>
          <p>Price <br></br> {viewData.price}</p>
          <p>Location <br></br> {viewData.location}</p>
          <p>Description <br></br> {viewData.description}</p>
        </div>
      ),
  
      onOk() {},
    });
  };

  const dateFormat = 'DD/MM/YYYY';

  return (
    <>
    <div 
    style={{
      position: 'absolute',
    }}
    >
      <Sidebar/>
    </div>
        <div style={{
          minWidth: 1046,
          marginLeft: '400px',
          // backgroundColor: 'black',
          paddingLeft: 62,
          paddingRight: 60,
          paddingTop: 170,
        }}>
      <h1
        style={{
          fontSize: "32px",
          fontWeight: "bold",
          fontFamily: "Roboto",
        }}
        >
        Manage Online Class
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
            paddingRight: '44.5px',
            paddingTop: '25px'
          }}
          >
          <h1 
          style={{
            fontSize: "24px",
            fontFamily: "Roboto",
          }}
          >
            List Online Class
          </h1>
          <Button 
          id='btn-add-online-class'
          onClick={() => {
            setIsAddingOnlineClass(true);
          }}
          style={{
            backgroundColor: '#F27370',
            color: 'white',
            border: '1px solid #F27370',
            borderRadius: '4px',
            marginLeft: 'auto',

          }}
          >+ NEW</Button>
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

{/* MODAL EDITING CLASS */}
        <Modal
        title=""
        visible={isEditing}
        footer={null}
        >
        
        <h1
          style={{
            fontSize: '32px',
            fontWeight: 'bold',
          }}
        >Edit Class</h1>

          <Form.Item
          >
            <div 
            style={{
              fontSize: '20px',
              marginBottom: '5px',              
            }}
            >Name Class</div>
            <img
              src={fldClass}
              style={{
                position: 'absolute',
                zIndex: '900',
                padding: '15px 0 18.5px 17.5px'
              }}
              />
            <Input 
            id='fld-edit-name-class-offline-class'
            placeholder='Enter Your Name Class' 
            style={{
              border: '1px solid #707070',
              padding: '10px 35px',
              borderRadius: '4px',
              color: '#707070'
            }}            
            value={editingOnlineClass?.nameClass} 
            onChange={(e) => {
              setEditingOnlineClass((pre) => {
                return {...pre, nameClass: e.target.value };
              });
            }}
            />
          </Form.Item>

          <Form.Item
          >
             <div 
            style={{
              fontSize: '20px',
              marginBottom: '5px',              
            }}
            >Trainer</div>
            <img
              src={fldClass}
              style={{
                position: 'absolute',
                zIndex: '900',
                padding: '15px 0 18.5px 17.5px'
              }}
            />
            <Input 
            id='fld-edit-trainer-offline-class'
            placeholder='Enter Your Class Trainer' 
            style={{
              border: '1px solid #707070',
              padding: '10px 35px',
              borderRadius: '4px',
              color: '#707070'
            }} 
            value={editingOnlineClass?.trainer} 
            onChange={(e) => {
              setEditingOnlineClass((pre) => {
                return {...pre, trainer: e.target.value };
              });
            }}
            />
          </Form.Item>
          
          <Form.Item
          >
             <div 
            style={{
              fontSize: '20px',
              marginBottom: '5px',
            }}
            >Date</div>
            <img
              src={fldDate}
              style={{
                position: 'absolute',
                zIndex: '900',
                padding: '15px 0 18.5px 17.5px'
              }}
              />
            <Input 
            id='fld-edit-date-offline-class'
            placeholder='dd/mm/yyyy' 
            format={dateFormat}
            style={{
              border: '1px solid #707070',
              padding: '10px 35px',
              borderRadius: '4px',
              color: '#707070',
              width: '100%',
            }}               
            // Masih error pas ngasih datanya        
            value={editingOnlineClass?.date} 
            onChange={(e) => {
              setEditingOnlineClass((pre) => {
                return {...pre, date: e.target.value };
              });
            }}
            />
          </Form.Item>

          <Form.Item
          >
             <div 
            style={{
              fontSize: '20px',
              marginBottom: '5px',              
            }}
            >Time</div>
            <img
              src={fldTime}
              style={{
                position: 'absolute',
                zIndex: '900',
                padding: '15px 0 18.5px 17.5px'
              }}
              />
            <Input 
            id='fld-edit-time-offline-class'
            placeholder='19.00' 
            value={editingOnlineClass?.time} 
            style={{
              border: '1px solid #707070',
              padding: '10px 35px',
              borderRadius: '4px',
              color: '#707070'
            }}            
            onChange={(e) => {
              setEditingOnlineClass((pre) => {
                return {...pre, time: e.target.value };
              });
            }}
            />
          </Form.Item>

          <Form.Item
          >
             <div 
            style={{
              fontSize: '20px',
              marginBottom: '5px',              
            }}
            >Location</div>
            <img
              src={fldClass}
              style={{
                position: 'absolute',
                zIndex: '900',
                padding: '15px 0 18.5px 17.5px'
              }}
            />
            <Input 
            id='fld-edit-location-offline-class'
            placeholder='Enter Your Location' 
            value={editingOnlineClass?.location} 
            style={{
              border: '1px solid #707070',
              padding: '10px 35px',
              borderRadius: '4px',
              color: '#707070'
            }}            
            onChange={(e) => {
              setEditingOnlineClass((pre) => {
                return {...pre, location: e.target.value };
              });
            }}
            />
          </Form.Item>

          <Form.Item
          >
             <div 
            style={{
              fontSize: '20px',
              marginBottom: '5px',              
            }}
            >Price</div>
            <img
              src={fldPrice}
              style={{
                position: 'absolute',
                zIndex: '900',
                padding: '15px 0 18.5px 17.5px'
              }}
            />
            <Input 
            id='fld-edit-price-offline-class'
            placeholder='Rp.' 
            value={editingOnlineClass?.price} 
            style={{
              border: '1px solid #707070',
              padding: '10px 35px',
              borderRadius: '4px',
              color: '#707070'
            }}            
            onChange={(e) => {
              setEditingOnlineClass((pre) => {
                return {...pre, price: e.target.value };
              });
            }}
            />
          </Form.Item>

          <Form.Item
          >
             <div 
            style={{
              fontSize: '20px',
              marginBottom: '5px',              
            }}
            >Description</div>
            <img
              src={fldClass}
              style={{
                position: 'absolute',
                zIndex: '900',
                padding: '15px 0 18.5px 17.5px'
              }}
            />
            <Input 
            id='fld-edit-description-offline-class'
            placeholder='Enter Your Description' 
            value={editingOnlineClass?.description} 
            style={{
              border: '1px solid #707070',
              padding: '10px 35px',
              borderRadius: '4px',
              color: '#707070'
            }}            
            onChange={(e) => {
              setEditingOnlineClass((pre) => {
                return {...pre, description: e.target.value };
              });
            }}
            />
          </Form.Item>

          <div
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
      >
        
        <Button
        id='btn-save-edit-class-offline-class'
        type="primary"
        onClick={() => {
          setDataSource((pre) => {
            return pre.map((onlineclass) => {
              if (onlineclass.id === editingOnlineClass.id) {
                return editingOnlineClass;
              } else {
                return onlineclass;
              }
            });
          });
          resetEditing();
          }}
          style={{
            width: '100%',
            marginBottom: '15px',
            borderRadius: '8px',
            fontSize: '16px',
            height: '40px',
            alignItems: 'center',
          }}          
        >
          + SAVE
        </Button>
        <Button
        id='btn-cancel-edit-class-offline-class'
        onClick={() => {
          resetEditing();

        }}
        style={{
          width: '100%',
          borderRadius: '8px',
          fontSize: '16px',
          height: '40px',
          alignItems: 'center',
        }}
        >
          CANCEL
        </Button>
      </div>
        </Modal>

{/* MODAL ADD CLASS */}
        <Modal
        title=""
        visible={isAddingOnlineClass}
        footer={null}
        >
        
        <h1
          style={{
            fontSize: '32px',
            fontWeight: 'bold',
          }}
        >Add Class</h1>

          <Form.Item
          >
            <div 
            style={{
              fontSize: '20px',
              marginBottom: '5px',              
            }}
            >Name Class</div>
            <img
              src={fldClass}
              style={{
                position: 'absolute',
                zIndex: '900',
                padding: '15px 0 18.5px 17.5px'
              }}
              />
            <Input 
            id='fld-add-name-offline-class'
            placeholder='Edit Your Name Class' 
            style={{
              border: '1px solid #707070',
              padding: '10px 35px',
              borderRadius: '4px',
              color: '#707070'
            }}            
            value={editingOnlineClass?.nameClass} 
            onChange={(e) => {
              setNewOnlineClass((pre) => {
                return {...pre, nameClass: e.target.value };
              });
            }}
            />
          </Form.Item>

          <Form.Item
          >
             <div 
            style={{
              fontSize: '20px',
              marginBottom: '5px',              
            }}
            >Trainer</div>
            <img
              src={fldClass}
              style={{
                position: 'absolute',
                zIndex: '900',
                padding: '15px 0 18.5px 17.5px'
              }}
            />
            <Input 
            id='fld-add-trainer-offline-class'
            placeholder='Enter Your CLass Trainer' 
            style={{
              border: '1px solid #707070',
              padding: '10px 35px',
              borderRadius: '4px',
              color: '#707070'
            }} 
            value={editingOnlineClass?.trainer} 
            onChange={(e) => {
              setNewOnlineClass((pre) => {
                return {...pre, trainer: e.target.value };
              });
            }}
            />
          </Form.Item>
          
          <Form.Item
          >
             <div 
            style={{
              fontSize: '20px',
              marginBottom: '5px',
            }}
            >Date</div>
            <img
              src={fldDate}
              style={{
                position: 'absolute',
                zIndex: '900',
                padding: '15px 0 18.5px 17.5px'
              }}
            />
            <Input 
            id='fld-add-date-offline-class'
            placeholder='dd/mm/yyyy' 
            format={dateFormat}
            style={{
              border: '1px solid #707070',
              padding: '10px 35px',
              borderRadius: '4px',
              color: '#707070',
              width: '100%'
            }}             
            // Masih error pas ngasih data nya   
            value={editingOnlineClass?.date} 
            onChange={(e) => {
              setNewOnlineClass((pre) => {
                return {...pre, date: e.target.value };
              });
            }}
            />
          </Form.Item>

          <Form.Item
          >
             <div 
            style={{
              fontSize: '20px',
              marginBottom: '5px',              
            }}
            >Time</div>
            <img
              src={fldTime}
              style={{
                position: 'absolute',
                zIndex: '900',
                padding: '15px 0 18.5px 17.5px'
              }}
              />
            <Input 
            id='fld-add-time-offline-class'
            placeholder='19.00' 
            value={editingOnlineClass?.time} 
            style={{
              border: '1px solid #707070',
              padding: '10px 35px',
              borderRadius: '4px',
              color: '#707070'
            }}            
            onChange={(e) => {
              setNewOnlineClass((pre) => {
                return {...pre, time: e.target.value };
              });
            }}
            />
          </Form.Item>

          <Form.Item
          >
             <div 
            style={{
              fontSize: '20px',
              marginBottom: '5px',              
            }}
            >Location</div>
            <img
              src={fldClass}
              style={{
                position: 'absolute',
                zIndex: '900',
                padding: '15px 0 18.5px 17.5px'
              }}
            />
            <Input 
            id='fld-add-location-offline-class'
            placeholder='Enter Your Location' 
            value={editingOnlineClass?.location} 
            style={{
              border: '1px solid #707070',
              padding: '10px 35px',
              borderRadius: '4px',
              color: '#707070'
            }}            
            onChange={(e) => {
              setNewOnlineClass((pre) => {
                return {...pre, location: e.target.value };
              });
            }}
            />
          </Form.Item>

          <Form.Item
          >
             <div 
            style={{
              fontSize: '20px',
              marginBottom: '5px',              
            }}
            >Price</div>
            <img
              src={fldPrice}
              style={{
                position: 'absolute',
                zIndex: '900',
                padding: '15px 0 18.5px 17.5px'
              }}
            />
            <Input 
            id='fld-add-price-offline-class'
            placeholder='Rp.' 
            value={editingOnlineClass?.price} 
            style={{
              border: '1px solid #707070',
              padding: '10px 35px',
              borderRadius: '4px',
              color: '#707070'
            }}            
            onChange={(e) => {
              setNewOnlineClass((pre) => {
                return {...pre, price: e.target.value };
              });
            }}
            />
          </Form.Item>

          <Form.Item
          >
             <div 
            style={{
              fontSize: '20px',
              marginBottom: '5px',              
            }}
            >Description</div>
            <img
              src={fldClass}
              style={{
                position: 'absolute',
                zIndex: '900',
                padding: '15px 0 18.5px 17.5px'
              }}
            />
            <Input 
            id='fld-add-description-offline-class'
            placeholder='Enter Your Description' 
            value={editingOnlineClass?.description} 
            style={{
              border: '1px solid #707070',
              padding: '10px 35px',
              borderRadius: '4px',
              color: '#707070'
            }}            
            onChange={(e) => {
              setNewOnlineClass((pre) => {
                return {...pre, description: e.target.value };
              });
            }}
            />
          </Form.Item>

          <div
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
      >
        
        <Button
        id='btn-save-add-offline-class'
        type="primary"
        onClick={() => {
          setDataSource([...dataSource, newOnlineClass]);
          resetAddOnlineClass();
          }}
          style={{
            width: '100%',
            marginBottom: '15px',
            borderRadius: '8px',
            fontSize: '16px',
            height: '40px',
            alignItems: 'center',
          }}          
        >
          + SAVE
        </Button>
        <Button
        id='btn-cancel-add-offline-class'
        onClick={() => {
          resetAddOnlineClass();
        }}
        style={{
          width: '100%',
          borderRadius: '8px',
          fontSize: '16px',
          height: '40px',
          alignItems: 'center',
        }}
        >
          CANCEL
        </Button>
      </div>
        </Modal>

        <Modal 
      visible={openDelete} 
      footer={null} 
      onCancel={handleCancel}>
        <Box 
        display="flex" 
        justifyContent="center">
          <img 
          src={warning} 
          alt="iconwarning" 
          width='300px'
          ></img>
        </Box>
        <p 
        style={{ 
          textAlign: "center", 
          padding: "30px", 
          fontSize: "24px" 
          }}>
          Are you sure want to delete this?
        </p>
        <Box 
        display="flex" 
        justifyContent="center">
          <Button1
            id='btn-confirm-delete-offline-class'
            style={{
              color: "white",
              fontSize: "16px",
              backgroundColor: "#F27370",
              borderRadius: "8px",
              marginRight: "20px",
              padding: "7px 10px",
            }}
            onClick={() => {
              setOpenDelete(false);
              setDataSource((pre) => {
                return pre.filter((onlineclass) => onlineclass.id !== deleteId);
              });
            }}
          >
            Delete
          </Button1>
          <Button1
            id='btn-cancel-delete-offline-class'
            variant="outlined"
            style={{
              color: "#F27370",
              border: "2px solid #F27370",
              backgroundColor: "white",
            }}
            onClick={handleCancel}
          >
            Cancel
          </Button1>
        </Box>
      </Modal>

    </div>
    </>

  );
}

