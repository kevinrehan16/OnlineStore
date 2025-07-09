import React from 'react'
import { 
  Navbar as BSNavbar, 
  Container, 
  Nav, 
  Button } 
from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo2.jpg' // Adjust the path as necessary;

const Navbar = () => {
  return (
    <BSNavbar bg="white" expand="lg" fixed="top" className="shadow-sm mb-4">
      <Container>
        <BSNavbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img
            src={Logo}
            alt="MyStore Logo"
            width="70"
            height="70"
            className="d-inline-block align-top"
          />
          <label className='logoName'><span className='text-danger fw-bold fs-4'>Online</span><br />Store</label>
        </BSNavbar.Brand>
        <BSNavbar.Toggle aria-controls="main-navbar-nav" />
        <BSNavbar.Collapse id="main-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/shop">Shop</Nav.Link>
            <Nav.Link as={Link} to="/cart">Cart</Nav.Link>
          </Nav>
          <div className="d-flex gap-2">
            <Button as={Link} to="/login" variant="outline-primary" size="sm">
              Login
            </Button>
            <Button as={Link} to="/register" variant="primary" size="sm">
              Register
            </Button>
          </div>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>

  )
}

export default Navbar
