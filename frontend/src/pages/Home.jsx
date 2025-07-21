import React, { useContext, useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ProductCard from '../components/product/ProductCard'
import CarouselBanner from '../components/carousel/CarouselBanner'
import CategoryBanner from '../components/category/CategoryBanner'
import axios from 'axios';
import { useProduct } from '../context/productContext'

const Home = () => {
  const [products, setProducts] = useState([]);
  const { getProducts } = useProduct();

  const displayProducts = async () => {
    try {
      const dataProducts = await getProducts();
      setProducts(dataProducts);
      console.log(dataProducts);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    displayProducts();
  }, [])

  return (
    <Container className="mt-5">
      <CarouselBanner />
      <CategoryBanner />
      <Row className="text-left my-5">
        <Col>
          <h2 className='g-0 text-header-title'><i className="bi bi-bag-heart-fill text-danger"></i> Just For You</h2>
          <Row className="g-2 justify-content-center">
            {products.map((product, index) => (
              <Col key={product._id} xs={6} sm={4} md={3} lg={2} className="mb-3">
                <ProductCard key={index}
                  id={product._id}
                  name={product.name}
                  price={product.price}
                  image={product.image}
                  rate={product.averageRating}
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
