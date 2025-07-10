import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../../assets/logo.png' // Adjust the path as necessary;
import { Link } from 'react-router-dom';

function AdminNavbar() {
  return (
    <Navbar collapseOnSelect expand="md" className="bg-danger shadow-lg p-2" sticky="top">
      <Navbar className="ms-2">
        <i className="bi bi-list text-white bold cursor-pointer"></i>
      </Navbar>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="#deets" className="text-white">Kevin Macandog</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default AdminNavbar;