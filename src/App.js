import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ConfigProvider } from 'antd';

import Home from './pages/Home/Home'
import ManageAdmin from './pages/Manage Admin/ManageAdmin'
import ManageMembership from './pages/Manage Membership/ManageMembership'
import ManageOfflineClass from "./pages/Manage Offline/ManageOfflineClass";
import ManageOfflineBooking from "./pages/Manage Offline/ManageOfflineBooking";
import ManageOnlineClass from "./pages/Manage Online/ManageOnlineClass";
import ManageOnlineBooking from "./pages/Manage Online/ManageOnlineBooking";
import LandingPage from "./pages/Landing/LandingPage";

ConfigProvider.config({
  theme: {
    primaryColor: '#F27370',
  },
});


const theme = createTheme({
  palette: {
    black: {
      main: "#000000",
      contrastText: "#ffffff",
    },
  },
});



function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <ConfigProvider>
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<ManageAdmin />} />
            <Route path="/membership" element={<ManageMembership />} />
            <Route path="/offline-class" element={<ManageOfflineClass />} />
            <Route path="/offline-class-booking" element={<ManageOfflineBooking />} />
            <Route path="/online-class" element={<ManageOnlineClass />} />
            <Route path="/online-class-booking" element={<ManageOnlineBooking />} />
          </Routes>
        </Router>
        </ConfigProvider>
      </ThemeProvider>
    </>
  );
}

export default App;