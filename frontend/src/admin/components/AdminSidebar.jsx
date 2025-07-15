// src/admin/components/Sidebar.jsx
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../../assets/logo2.jpg' // Adjust the path as necessary;

const AdminSidebar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div id='adminSidebar' className="sidebar d-flex flex-column bg-white vh-100 shadow-lg">
      <Navbar.Brand as={Link} to="/" className="d-flex align-items-center my-1">
        <img
          src={Logo}
          alt="MyStore Logo"
          width="50"
          height="50"
          className="d-inline-block align-top"
        />
        <h4 className='logoName mt-2'><span className='text-danger fw-bold'>Online</span>Store</h4>
      </Navbar.Brand>
      <Nav className="flex-column mt-2">
        <Nav.Link as={Link} to="/mystore/admin/dashboard" className={`d-flex align-items-center mx-1 mb-1 ${isActive('/mystore/admin/dashboard') ? 'active' : '' }`}>
          <i className="bi bi-speedometer2 me-2"></i> Dashboard
        </Nav.Link>
        <p className="divider text-muted my-2 px-3">Main Navigation</p>
        <Nav.Link as={Link} to="/mystore/admin/products" className={`d-flex align-items-center mx-1 mb-1 ${isActive('/mystore/admin/products') ? 'active' : '' }`}>
          <i className="bi bi-box-seam me-2"></i> Products
        </Nav.Link>
        <Nav.Link as={Link} to="/mystore/admin/orders" className={`d-flex align-items-center mx-1 mb-1 ${isActive('/mystore/admin/orders') ? 'active' : '' }`}>
          <i className="bi bi-cart-check me-2"></i> Orders
        </Nav.Link>
        <Nav.Link as={Link} to="/mystore/admin/users" className={`d-flex align-items-center mx-1 mb-1 ${isActive('/mystore/admin/users') ? 'active' : '' }`}>
          <i className="bi bi-people me-2"></i> Users
        </Nav.Link>
      </Nav>
    </div>
  );
};

export default AdminSidebar;
