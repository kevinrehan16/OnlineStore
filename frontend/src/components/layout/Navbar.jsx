import React from 'react'
import { 
  Navbar as BSNavbar, 
  Container, 
  Nav, 
  Button,
  Form
} 
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
          <h4 className='logoName mt-2'><span className='text-danger fw-bold'>Online</span><br />Store</h4>
        </BSNavbar.Brand>
        <BSNavbar.Toggle aria-controls="main-navbar-nav" />
        <BSNavbar.Collapse id="main-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link as={Link} to="/">Home</Nav.Link> */}
            <Nav.Link as={Link} to="/shop">Shop</Nav.Link>
            <Nav.Link as={Link} to="/cart">Cart</Nav.Link>
          </Nav>
          <Form className="d-flex me-2" onSubmit={(e) => {
            e.preventDefault();
            // Optional: add search logic or redirect
            console.log("Searching:", e.target.search.value);
          }}>
            <Form.Control
              type="search"
              name="search"
              placeholder="Search products..."
              className="me-2"
              size="sm"
            />
            <Button type="submit" variant="outline-success" size="sm">Search</Button>
          </Form>
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
