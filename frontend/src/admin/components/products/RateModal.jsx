import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function RateModal({ show, handleClose }) {
  const [hoveredRating, setHoveredRating] = useState(0); // Can be 3.5, etc.
  const [selectedRating, setSelectedRating] = useState(0);

  const handleMouseMove = (e, index) => {
    const { left, width } = e.target.getBoundingClientRect();
    const x = e.clientX - left;
    const isHalf = x < width / 2;
    setHoveredRating(isHalf ? index - 0.5 : index);
  };

  const handleClick = (e, index) => {
    const { left, width } = e.target.getBoundingClientRect();
    const x = e.clientX - left;
    const isHalf = x < width / 2;
    setSelectedRating(isHalf ? index - 0.5 : index);
  };

  const handleMouseLeave = () => {
    setHoveredRating(0);
  };

  const renderStar = (index) => {
    const rating = hoveredRating || selectedRating;

    if (rating >= index) return 'bi-star-fill';      // Full star
    if (rating >= index - 0.5) return 'bi-star-half'; // Half star
    return 'bi-star';                                 // Empty star
  };

  return (
    <Modal show={show} onHide={handleClose} size="sm">
      <Modal.Header closeButton>
        <Modal.Title>Rate Product</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Col>
          <Row>
            <div className="d-flex align-items-center justify-content-center rating-stars">
              {[1, 2, 3, 4, 5].map((index) => (
                <i
                  key={index}
                  className={`bi ${renderStar(index)} me-1 fs-2`}
                  style={{ color: '#f5c518', cursor: 'pointer' }}
                  onMouseMove={(e) => handleMouseMove(e, index)}
                  onMouseLeave={handleMouseLeave}
                  onClick={(e) => handleClick(e, index)}
                ></i>
              ))}
            </div>
          </Row>
        </Col>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={() => {
          console.log('Selected Rating:', selectedRating);
          handleClose();
        }}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default RateModal;
