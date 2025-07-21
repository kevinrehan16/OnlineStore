import React, { useEffect, useState } from 'react';
import {Nav, Navbar, NavDropdown} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useAdminAuth } from '../context/AdminAuthContext';

function AdminNavbar() {
  const navigate = useNavigate();
  const { logout } = useAdminAuth();

  const [user, setUser] = useState(null);

  useEffect(() => {
    const userInfo = JSON.parse(sessionStorage.getItem('admin_login'));
    if (userInfo) {
      setUser(userInfo);
    }
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem('admin_token');
    sessionStorage.removeItem('admin_login');
    sessionStorage.clear();
    logout();
    navigate('/mystore/admin/login');
  };

  return (
    <Navbar collapseOnSelect expand="md" className="bg-danger shadow-lg p-2" sticky="top">
      <Navbar className="ms-2">
        <i className="bi bi-list text-white bold cursor-pointer"></i>
      </Navbar>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto align-items-center">
          <Nav.Item className="d-flex align-items-center gap-2 text-white">
            <Navbar.Collapse id="navbar-light-example">
              <Nav className='nav-name'>
                <NavDropdown
                  id="nav-dropdown-dark-example"
                  title={user?.firstname +" "+user?.lastname}
                  menuVariant="light"
                  className='text-white'
                >
                  <NavDropdown.Item href="#action/3.1"><i class="bi bi-person"></i> Profile</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    <i class="bi bi-shield-lock"></i> Change Password
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="javascript:void(0)" onClick={handleLogout} className='d-flex align-items-center gap-2'>
                    <i
                      className="bi bi-box-arrow-right cursor-pointer"
                      title="Logout"
                      role="button"
                    ></i> Logout
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default AdminNavbar;