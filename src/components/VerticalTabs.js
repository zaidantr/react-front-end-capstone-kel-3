import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ManageOnlineBooking from "./ManageOnlineBooking";
import ManageOfflineBooking from "./ManageOfflineBooking";
import ManageAdmin from "./ManageAdmin";
import ManageMembership from "./ManageMembership";
import ManageTransaction from "./ManageTransaction";
import logo from "./logo.svg";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 3,
        bgcolor: "background.paper",
        display: "flex",
        height: 900,
      }}
    >
      <img
        src={logo}
        alt="logo"
        style={{
          width: "8vw",
          display: "flex",
          justifyContent: "center",
          position: "absolute",
          margin: "50px 0px 0px 75px",
        }}
      />

      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{
          borderRight: 1,
          borderColor: "divider",
        }}
        style={{
          paddingTop: 200,
        }}
      >
        <Tab label="Home" {...a11yProps(0)} />
        <Tab label="Manage Admin" {...a11yProps(1)} />
        <Tab label="Manage Membership" {...a11yProps(2)} />
        <Tab label="Manage Offline Classes" {...a11yProps(3)} />
        <Tab label="Manage Offline Classes Booking" {...a11yProps(4)} />
        <Tab label="Manage Online Classes" {...a11yProps(5)} />
        <Tab label="Manage Online CLasses Booking" {...a11yProps(6)} />
        <Tab label="Manage Transaction" {...a11yProps(7)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        Home
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ManageAdmin />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ManageMembership />
      </TabPanel>
      <TabPanel value={value} index={3}>
        Manage Offline Classes
      </TabPanel>
      <TabPanel value={value} index={4}>
        <ManageOfflineBooking />
      </TabPanel>
      <TabPanel value={value} index={5}>
        Manage Online Classes
      </TabPanel>
      <TabPanel value={value} index={6}>
        <ManageOnlineBooking />
      </TabPanel>
      <TabPanel value={value} index={7}>
        <ManageTransaction />
      </TabPanel>
    </Box>
  );
}
