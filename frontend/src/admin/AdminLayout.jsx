import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import AdminNavbar from './components/AdminNavbar'; 
import AdminSidebar from './components/AdminSidebar';
import '../styles/admin.css';

const AdminLayout = () => {
  return (
    <Container fluid className='m-0 p-0'>
      <div className="d-flex">
        <AdminSidebar />
        <div className="content flex-grow-1">
          <AdminNavbar />
          <Outlet />
        </div>
      </div>
    </Container>
  );
};

export default AdminLayout;
