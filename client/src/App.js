
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Adpage from './components/Admin/Adpage';
import AdminDashboard from './components/Admin/AdminDashboard';
import EnDashboard from './components/Engineer/EnggDash';
import LoginPage from './components/LoginPage';
import ServicesDashboard from './components/Admin/ServicesDashboard';
import CustomerPage from './components/Admin/CustomerPage';
import SitesPage from './components/Admin/SitesPage';
import TaskDashboard from './components/Admin/TaskDashboard';


const app = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<LoginPage/>}/>
           
          <Route path='/dashboard' element={<Adpage/>}/>
          <Route path='/admin' element={<AdminDashboard/>}/>
          <Route path='/services' element={<ServicesDashboard/>} />
          <Route path='/customers' element={<CustomerPage/>} />
          <Route path='/sites' element={<SitesPage/>} />
          <Route path='/tasks' element={<TaskDashboard/>} />

          <Route path='/endash' element={<EnDashboard/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default app;
