import React from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import { useCart } from '../context/CartContext';

const products = [
  {
    id: 1,
    name: 'Wireless Headphone',
    price: 1499,
    image: '/assets/images/headphone.jpg',
    description: 'High-quality wireless headphone with long battery life.',
  },
  {
    id: 2,
    name: 'Bluetooth Speaker',
    price: 999,
    image: '/assets/images/speaker.jpg',
    description: 'Portable Bluetooth speaker with rich bass.',
  },
  {
    id: 3,
    name: 'Smart Watch',
    price: 2299,
    image: '/assets/images/watch.jpg',
    description: 'Smart watch with fitness tracker and notification alerts.',
  },
  {
    id: 4,
    name: 'Gaming Mouse',
    price: 799,
    image: '/assets/images/mouse.jpg',
    description: 'Ergonomic mouse with RGB lighting for gaming.',
  },
  {
    id: 5,
    name: 'Java book',
    price: 799,
    image: '/assets/images/book.jpg',
    description: 'Comprehensive guide to Java programming.',
  },
  {
    id: 6,
    name: 'Gaming Mouse',
    price: 799,
    image: '/assets/images/fashion.jpg',
    description: 'Stylish and comfortable gaming mouse with customizable buttons.',
  },
];

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find(p => p.id === parseInt(id));

  const { addToCart } = useCart();

  if (!product) {
    return (
      <Container className="text-center my-5">
        <h2>Product not found</h2>
        <Button variant="secondary" onClick={() => navigate('/')}>Go Home</Button>
      </Container>
    );
  }

  return (
    <Container className="my-5">
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid rounded />
        </Col>
        <Col md={6}>
          <h2>{product.name}</h2>
          <h4 className="text-muted mb-3">₱{product.price.toLocaleString()}</h4>
          <p>{product.description}</p>
          <Button variant="primary" onClick={() => addToCart({id:product.id, name:product.name, price:product.price, image:product.image })}>
            Add to Cart
          </Button>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductDetails
