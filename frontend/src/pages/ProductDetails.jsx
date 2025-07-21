import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import { useCart } from '../context/CartContext';
import { useProduct } from '../context/productContext';

const ProductDetails = () => {
  const [product, setProduct] = useState([]);

  const { id } = useParams();
  const navigate = useNavigate();
  
  const { addToCart } = useCart();

  const { getProducts } = useProduct();
  const getProductList = async () => {
    try {
      const data = await getProducts();
      const findProduct = data?.find(prod => prod?._id === id);
      setProduct(findProduct);
      // console.log(findProduct);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    getProductList();
  }, []);
  
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
          <Image src={product?.image} alt={product?.name} fluid rounded />
        </Col>
        <Col md={6}>
          <h2>{product?.name}</h2>
          <h4 className="text-muted mb-3">₱{product?.price}</h4>
          <p>{product?.description}</p>
          <Button variant="primary" onClick={() => addToCart({id:product?._id, name:product?.name, price:product?.price, image:product?.image })}>
            Add to Cart
          </Button>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductDetails
