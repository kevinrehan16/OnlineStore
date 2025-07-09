import React from 'react'
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

const ProductCard = ({ id, name, price, image, rate }) => {
  const { addToCart } = useCart();

  const StarRating = ({ rating }) => {
    const stars = [];

    // Loop through 5 stars
    for (let i = 1; i <= 5; i++) {
      if (rating >= i) {
        stars.push(<i key={i} className="bi bi-star-fill text-warning me-1"></i>);
      } else if (rating >= i - 0.5) {
        stars.push(<i key={i} className="bi bi-star-half text-warning me-1"></i>);
      } else {
        stars.push(<i key={i} className="bi bi-star text-warning me-1"></i>);
      }
    }

    return <>{stars}</>;
  };

  return (
    <Card className="h-100 shadow-sm" style={{ borderRadius: 0 }}>
      <Link to={`/product/${id}`} className='text-decoration-none text-dark'>
        <Card.Img
          variant="top"
          src={image}
          alt={name}
          style={{
            objectFit: 'cover',
            height: '200px',
            width: '100%',
            backgroundColor: '#f8f9fa'  // optional: adds a clean background
          }}
        />
        <Card.Body className="d-flex flex-column">
          <Card.Title className="text-truncate fw-semibold fs-6 text-capitalize mb-0" title={name}>{name}</Card.Title>
          <Card.Text className="fw-bold mb-1 text-danger">₱{price.toLocaleString()}</Card.Text>
          <Card.Text className="float-right small mb-0 text-warning">
            <StarRating rating={rate} />
          </Card.Text>
          {/* <Button
            variant="primary"
            className="mt-auto"
            onClick={() => addToCart({ id, name, price, image })}>
            Add to Cart
          </Button> */}
        </Card.Body>
      </Link>
    </Card>
  )
}

export default ProductCard
