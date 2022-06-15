import "./App.css";
import { Route, BrowserRouter as Router, Routes, Link } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ConfigProvider } from 'antd';

// Components ------------------------------------------------------------------------
import VerticalTabs from "./components/VerticalTabs";
// import Login from "./components/Login";
import Landing from "./pages/Landing"
import Login from "./pages/Login"

ConfigProvider.config({
  theme: {
    primaryColor: '#F27370',
  },
});

// import ManageAdmin from './components/ManageAdmin'
// import ManageMembership from './components/ManageMembership'
// import Sidebar from './components/Sidebar'

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
            <Route path="/" element={<Landing />} />
            <Route path="/dashboard" element={<VerticalTabs />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
        </ConfigProvider>
      </ThemeProvider>
    </>
  );
}

export default App;