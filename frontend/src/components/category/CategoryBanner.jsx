import React from 'react'
import { Row, Col, Container, Card } from 'react-bootstrap'

const Categories = [
  { id: 1, name: 'Electronics', image: '/assets/images/categories/electronics.avif' },
  { id: 2, name: 'Fashion', image: '/assets/images/categories/fashions.avif' },
  { id: 3, name: 'Home Appliances', image: '/assets/images/categories/appliances.avif' },
  { id: 4, name: 'Books', image: '/assets/images/categories/books.jpg' },
  { id: 5, name: 'Sports', image: '/assets/images/categories/sports.avif' }, 
  { id: 6, name: 'Toys', image: '/assets/images/categories/toys.jpg' }, 
  { id: 7, name: 'Beauty', image: '/assets/images/categories/beauty.jpg' },
  { id: 8, name: 'Automotive', image: '/assets/images/categories/automotive.jpg' },
  { id: 9, name: 'Health', image: '/assets/images/categories/health.jpg' },
  { id: 10, name: 'Grocery', image: '/assets/images/categories/grocery.jpg' },
  { id: 11, name: 'Pet Supplies', image: '/assets/images/categories/petsupply.avif' },
  { id: 12, name: 'Gardening', image: '/assets/images/categories/gardening.jpg' },
]
const CategoryBanner = () => {
  return (
    <Container className='my-5'>
      <Row>
        <h2 className='g-0 text-header-title'><i className="bi bi-tags-fill text-danger"></i> Categories</h2>
        {Categories.map((category, index) => (
          <Col className='g-0' key={index} xs={6} sm={4} md={2}>
            <Card className="text-center category-card h-100 p-1 pt-4" style={{ borderRadius: 0 }}>
              <Card.Img
                variant="top"
                src={category.image}
                alt={category.name}
                style={{ height: '100px', objectFit: 'contain' }}
              />
              <Card.Body className="p-2">
                <Card.Text className="small fw-semibold">{category.name}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default CategoryBanner
