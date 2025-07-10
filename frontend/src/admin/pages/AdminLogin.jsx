import React, { useState, useEffect } from 'react';
import { Form, Button, Card, Container, Row, Col, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Logo from '../../assets/logo.png'
import { useAdminAuth } from '../context/AdminAuthContext';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();
  const { isAdminAuthenticated, login } = useAdminAuth();

  useEffect(() => {
    if (isAdminAuthenticated) {
      navigate('/mystore/admin/dashboard');
    }
  }, [isAdminAuthenticated, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    try {
      const { data } = await axios.post(`${API_URL}/api/admin/login`, {
        email,
        password,
      });
      sessionStorage.setItem('admin_token', data.token);

      login();
      navigate('/mystore/admin/dashboard');
      
    } catch (err) {
      const message = err.response?.data?.message || 'Login failed';
      setError(message);
    }
  };

  return (
    <Container fluid className="admin-login-container">
      <Row className="justify-content-center align-items-center min-vh-100">
        <Col md={4}>
          <Card className="shadow-lg p-4 rounded-4">
            <Card.Body>
              <div className="text-center mb-4">
                <img
                  src={Logo}
                  alt="MyStore Logo"
                  width="100"
                  height="100"
                  className="d-inline-block align-top"
                />
                <h4 className="fw-bold text-danger">My Store</h4>
              </div>

              {error && <Alert variant="danger">{error}</Alert>}

              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </Form.Group>

                <div className="d-grid">
                  <Button variant="danger" type="submit" size="lg">
                    Login
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminLogin;
