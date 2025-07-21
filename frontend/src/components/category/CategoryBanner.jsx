import React, { useEffect, useState } from 'react'
import { Row, Col, Container, Card } from 'react-bootstrap'
import axios from 'axios';
import { API_URL, CATEGORY_IMAGE_ROOT } from '../../config';

const CategoryBanner = () => {
  const [categories, setCategories] = useState([]);

  const getCategories = async() => {
    const { data } = await axios.get(`${API_URL}/api/category`);
    setCategories(data);
  }

  useEffect(()=> {
    getCategories();
    console.log(CATEGORY_IMAGE_ROOT);
    
  }, []);

  return (
    <Container className='my-5'>
      <Row>
        <h2 className='g-0 text-header-title'><i className="bi bi-tags-fill text-danger"></i> Categories</h2>
        {categories.map((category, index) => (
          <Col className='g-0' key={index} xs={6} sm={4} md={2}>
            <Card className="text-center category-card h-100 p-1 pt-4" style={{ borderRadius: 0 }}>
              <Card.Img
                variant="top"
                src={CATEGORY_IMAGE_ROOT + category.categoryImage}
                alt={category.categoryType}
                style={{ height: '100px', objectFit: 'contain' }}
              />
              <Card.Body className="p-2">
                <Card.Text className="small fw-semibold">{category.categoryType}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default CategoryBanner
