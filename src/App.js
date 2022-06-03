import './App.css';
import {Route, BrowserRouter as Router, Routes, Link} from 'react-router-dom'
import VerticalTabs from './components/VerticalTabs'
// import ManageAdmin from './components/ManageAdmin'
// import ManageMembership from './components/ManageMembership'
// import Sidebar from './components/Sidebar'

function App() {
  return (
    <>
    {/* <Sidebar/> */}
    <VerticalTabs />
      {/* <Router>
        <Routes>
          <Route path="/" element={<Sidebar/>}/>
          <Route path="/admin" element={<ManageAdmin/>}/>
          <Route path="/offline" element={<ManageMembership/>}/>
        </Routes>
      </Router> */}
    </>
  );
}

export default App;
