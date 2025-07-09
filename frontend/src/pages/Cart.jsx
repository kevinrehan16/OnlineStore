// src/pages/Cart.jsx
import React from 'react';
import { Container, Row, Col, Button, Table } from 'react-bootstrap';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <Container className="my-5">
      <h2 className="mb-4">Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <div className="text-center">
          <p>Your cart is empty.</p>
          <Button as={Link} to="/">Go Back to Shop</Button>
        </div>
      ) : (
        <>
          <Table bordered responsive hover>
            <thead>
              <tr>
                <th>Product</th>
                <th>Name</th>
                <th className="text-center">Qty</th>
                <th className="text-end">Price</th>
                <th className="text-end">Subtotal</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map(item => (
                <tr key={item.id}>
                  <td width="80">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="img-fluid rounded"
                      style={{ height: '60px', objectFit: 'cover' }}
                    />
                  </td>
                  <td>{item.name}</td>
                  <td className="text-center">
                  <div className="d-flex align-items-center justify-content-center gap-2">
                    <Button
                      variant="outline-secondary"
                      size="sm"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      −
                    </Button>
                    <span>{item.quantity}</span>
                    <Button
                      variant="outline-secondary"
                      size="sm"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </Button>
                  </div>
                </td>
                  <td className="text-end">₱{item.price.toLocaleString()}</td>
                  <td className="text-end">₱{(item.price * item.quantity).toLocaleString()}</td>
                  <td className="text-end">
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => {
                        Swal.fire({
                          title: 'Remove Item?',
                          text: `Are you sure you want to remove "${item.name}" from your cart?`,
                          icon: 'warning',
                          showCancelButton: true,
                          confirmButtonColor: '#d33',
                          cancelButtonColor: '#6c757d',
                          confirmButtonText: 'Yes, remove it!',
                        }).then((result) => {
                          if (result.isConfirmed) {
                            removeFromCart(item.id);
                            Swal.fire({
                              icon: 'success',
                              title: 'Removed!',
                              text: `"${item.name}" has been removed from your cart.`,
                              timer: 1500,
                              showConfirmButton: false,
                              scrollbarPadding: false,
                            });
                          }
                        });
                      }}
                    >
                      Remove
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          <Row className="mt-4">
            <Col md={{ span: 4, offset: 8 }}>
              <div className="border rounded p-3 bg-light">
                <h5>Cart Summary</h5>
                <p>Total Items: {totalItems}</p>
                <p className="fw-bold">Total: ₱{totalPrice.toLocaleString()}</p>
                <Button variant="success" className="w-100">Checkout</Button>
              </div>
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
};

export default Cart;
