import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ProductCard from '../components/product/ProductCard'
import CarouselBanner from '../components/carousel/CarouselBanner'
import CategoryBanner from '../components/category/CategoryBanner'

const Home = () => {
  const products = [
    {
      id: 1,
      name: 'Wireless Headphone',
      price: 1499,
      image: '/assets/images/headphone.jpg',
      rate: 5,
    },
    {
      id: 2,
      name: 'Bluetooth Speaker',
      price: 999,
      image: '/assets/images/speaker.jpg',
      rate: 4.5,
    },
    {
      id: 3,
      name: 'Smart Watch',
      price: 2299,
      image: '/assets/images/watch.jpg',
      rate: 4.5,
    },
    {
      id: 4,
      name: 'Gaming Mouse',
      price: 799,
      image: '/assets/images/mouse.jpg',
      rate: 3.5,
    },
    {
      id: 5,
      name: 'Java Book',
      price: 1200,
      image: '/assets/images/book.jpg',
      rate: 4.5,
    },
    {
      id: 6,
      name: 'Fashion men',
      price: 960,
      image: '/assets/images/fashion.jpg',
      rate: 3,
    },
    {
      id: 7,
      name: 'Bike',
      price: 960,
      image: '/assets/images/bike.jpg',
      rate: 2.5,
    },
    {
      id: 8,
      name: 'Camera',
      price: 960,
      image: '/assets/images/camera.jpg',
      rate: 4.5,
    },
    {
      id: 9,
      name: 'Cellphone',
      price: 960,
      image: '/assets/images/cellphone.jpg',
      rate: 4,
    },
    {
      id: 10,
      name: 'Dress',
      price: 960,
      image: '/assets/images/dress.jpg',
      rate: 3,
    },
    {
      id: 11,
      name: 'Laptop',
      price: 960,
      image: '/assets/images/laptop.jpg',
      rate: 3.5,
    },
    {
      id: 12,
      name: 'Short',
      price: 960,
      image: '/assets/images/short.jpg',
      rate: 2,
    },
  ];

  return (
    <Container className="mt-5">
      <CarouselBanner />
      <CategoryBanner />
      <Row className="text-left my-5">
        <Col>
          <h2 className='g-0 text-header-title'><i class="bi bi-bag-heart-fill text-danger"></i> Just For You</h2>
          <Row className="g-2 justify-content-center">
            {products.map((product, index) => (
              <Col key={product.id} xs={12} sm={6} md={6} lg={2} className="mb-3">
                <ProductCard key={index}
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  image={product.image}
                  rate={product.rate}
                />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default Home
