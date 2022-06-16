// import * as React from 'react';
// import PropTypes from 'prop-types';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';
// import ManageOnlineBooking from './ManageOnlineBooking';
// import ManageOfflineBooking from './ManageOfflineBooking';
// import ManageAdmin from './ManageAdmin';
// import ManageMembership from './ManageMembership';
// import logo from '../assets/logo.svg';
// import ManageOnlineClass from './ManageOnlineClass';
// import Home from './Dashboard';
// import ManageOfflineClass from './ManageOfflineClass';
// import "./antd.css";


// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`vertical-tabpanel-${index}`}
//       aria-labelledby={`vertical-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box sx={{ p: 3 }}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired,
// };

// function a11yProps(index) {
//   return {
//     id: `vertical-tab-${index}`,
//     'aria-controls': `vertical-tabpanel-${index}`,
//   };
// }

// export default function VerticalTabs() {
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
    
//     <Box
//       sx={{ 
//         flexGrow: 3, 
//         // bgcolor: 'blue', 
//         display: 'flex', 
//         height: 1024,
//         color: 'white',
//       }}
      
//       >
//       <img 
//       src={logo} 
//       alt='logo'
//       style={{
//         width: '243px',
//         height: '65px',
//         justifyContent: "center",
//         position: "absolute",
//         margin: "50px 0px 0px 120px",
//       }}
//       /> 
      
//       <Tabs
//         orientation="vertical"
//         // variant="scrollable"
//         visibleScrollbar= 'true'
//         value={value}
//         onChange={handleChange}
//         aria-label="Vertical tabs example"
//         sx={{ 
//           borderRight: 1, 
//           borderColor: 'white' 
//         }}
//         style={{
//           paddingTop: 200,
//           backgroundColor: '#F27370',
//           width: '400px',
//           color: 'white',
//         }}
//       >
        
//         <Tab 
//         label="Home" {...a11yProps(0)} 
//         style={{
//           color: 'white',
//           fontFamily: 'Roboto',
//           fontStyle: 'normal',
//           fontWeight: '700',
//           fontSize: '16px',
//           lineHeight: '23px',
//         }}
//         />
//         <Tab 
//         label="Manage Admin" {...a11yProps(1)} 
//         style={{
//           color: 'white',
//           fontFamily: 'Roboto',
//           fontStyle: 'normal',
//           fontWeight: '700',
//           fontSize: '16px',
//           lineHeight: '23px',
//         }}
//         />
//         <Tab 
//         label="Manage Membership" {...a11yProps(2)} 
//         style={{
//           color: 'white',
//           fontFamily: 'Roboto',
//           fontStyle: 'normal',
//           fontWeight: '700',
//           fontSize: '16px',
//           lineHeight: '23px',
//         }}
//         />
//         <Tab 
//         label="Manage Offline Classes" {...a11yProps(3)}
//         style={{
//           color: 'white',
//           fontFamily: 'Roboto',
//           fontStyle: 'normal',
//           fontWeight: '700',
//           fontSize: '16px',
//           lineHeight: '23px',
//         }}
//         />
//         <Tab 
//         label="Manage Offline Classes Booking" {...a11yProps(4)} 
//         style={{
//           color: 'white',
//           fontFamily: 'Roboto',
//           fontStyle: 'normal',
//           fontWeight: '700',
//           fontSize: '16px',
//           lineHeight: '23px',
//         }}
//         />
//         <Tab 
//         label="Manage Online Classes" {...a11yProps(5)} 
//         style={{
//           color: 'white',
//           fontFamily: 'Roboto',
//           fontStyle: 'normal',
//           fontWeight: '700',
//           fontSize: '16px',
//           lineHeight: '23px',
//         }}
//         />
//         <Tab 
//         label="Manage Online CLasses Booking" {...a11yProps(6)} 
//         style={{
//           color: 'white',
//           fontFamily: 'Roboto',
//           fontStyle: 'normal',
//           fontWeight: '700',
//           fontSize: '16px',
//           lineHeight: '23px',
//         }}
//         />
      
//       </Tabs>
//       <TabPanel value={value} index={0}>
//         < Home/>
//       </TabPanel>
//       <TabPanel value={value} index={1}>
//         <ManageAdmin />
//       </TabPanel>
//       <TabPanel value={value} index={2}>
//         <ManageMembership/>
//       </TabPanel>
//       <TabPanel value={value} index={3}>
//         <ManageOfflineClass />
//       </TabPanel>
//       <TabPanel value={value} index={4}>
//         <ManageOfflineBooking />
//       </TabPanel>
//       <TabPanel value={value} index={5}>
//         <ManageOnlineClass />
//       </TabPanel>
//       <TabPanel value={value} index={6}>
//         <ManageOnlineBooking />
//       </TabPanel>
//     </Box>
//   );
// }
