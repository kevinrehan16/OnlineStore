import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import { useAdminAuth } from '../context/AdminAuthContext';

function AdminNavbar() {
  const navigate = useNavigate();
  const { logout } = useAdminAuth();

  const handleLogout = () => {
    localStorage.removeItem('admin_token');
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
            <span>Kevin Macandog</span>
            <i
              className="bi bi-box-arrow-right fs-5 cursor-pointer"
              onClick={handleLogout}
              title="Logout"
              role="button"
            ></i>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default AdminNavbar;