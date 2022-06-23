import "./App.css";
import { Route, BrowserRouter as Router, Routes, Link } from "react-router-dom";
import VerticalTabs from "./components/VerticalTabs";
import Login from "./pages/Login/Login";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ConfigProvider } from 'antd';

import Dashboard from './components/Dashboard'
import ManageAdmin from './components/ManageAdmin'
import ManageMembership from './components/ManageMembership'
import ManageOfflineClass from "./components/ManageOfflineClass";
import ManageOfflineBooking from "./components/ManageOfflineBooking";
import ManageOnlineClass from "./components/ManageOnlineClass";
import ManageOnlineBooking from "./components/ManageOnlineBooking";
import Hero from "./pages/Landing/Hero";
import Form from './components/Form'


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
            {/* <Route path="/" element={<VerticalTabs />} /> */}
            <Route path="/" element={<Hero />} />
            <Route path="/dashboard" element={<Dashboard />} />

            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<ManageAdmin />} />
            <Route path="/membership" element={<ManageMembership />} />
            <Route path="/offline-class" element={<ManageOfflineClass />} />
            <Route path="/offline-class-booking" element={<ManageOfflineBooking />} />
            <Route path="/online-class" element={<ManageOnlineClass />} />
            <Route path="/online-class-booking" element={<ManageOnlineBooking />} />
            <Route path="/form" element={<Form />} />
          </Routes>
        </Router>
        </ConfigProvider>
      </ThemeProvider>
    </>
  );
}

export default App;