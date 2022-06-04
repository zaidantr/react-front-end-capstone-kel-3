import "./App.css";
import { Route, BrowserRouter as Router, Routes, Link } from "react-router-dom";
import VerticalTabs from "./components/VerticalTabs";
import Login from "./components/Login";
import { createTheme, ThemeProvider } from "@mui/material/styles";

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
        <Router>
          <Routes>
            <Route path="/" element={<VerticalTabs />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
