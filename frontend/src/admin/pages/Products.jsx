import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Card, Form, InputGroup, Button  } from 'react-bootstrap'
import ProductTable from '../components/products/ProductTable'
import axios from 'axios';
import ProductModal from '../components/products/ProductModal';
import RateModal from '../components/products/RateModal';
import { API_URL } from '../../config';

const Products = () => {
  const [productsList, setProductsList] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [modalRateShow, setModalRateShow] = useState(false);
  const [savingType, setSavingType] = useState("insert");
  const [productInfo, setProductInfo] = useState([]);

  useEffect(() => {
    getProducts();
  }, [])
  
  const getProducts = async() => {
    try {
      const { data } = await axios.get(`${API_URL}/api/products`);
      setProductsList(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  }

  const addModalProduct = () => {
    setSavingType("insert");
    setModalShow(true);
    setProductInfo({
      name: "",
      description: "",
      price: 0.00,
      stock: 0,
      category: "",
      image: ""
    })
  }

  const editModalProduct = (prodInfo) => {
    setSavingType("update");
    setModalShow(true);
    setProductInfo({
      _id: prodInfo._id,
      name: prodInfo.name,
      description: prodInfo.description,
      price: prodInfo.price,
      stock: prodInfo.stock,
      category: prodInfo.category,
      image: prodInfo.image
    })
  }

  const rateProduct = (prodInfo) => {
    setModalRateShow(true);
    console.log(prodInfo);
  }
  
  return (
    <Container className="my-3" fluid>
      <ProductModal refreshTableProducts={getProducts} show={modalShow} handleClose={()=>setModalShow(false)} productInfo={productInfo} savingType={savingType}></ProductModal>

      <RateModal show={modalRateShow} handleClose={()=>setModalRateShow(false)}></RateModal>
      
      <Row>
        <Col>
          <h3 className='module-title'>
            <i className="bi bi-box-seam-fill"></i> PRODUCTS
          </h3>
        </Col>
      </Row>

      <Row className="g-2 mb-3">
        <Col>
          <Card className="shadow-sm rounded-0">
            <Card.Body className="p-3">
              <Row className="g-2 align-items-center">
                <Col md={3}>
                  <InputGroup>
                    <Form.Control
                      placeholder="Search product name..."
                      aria-label="Search"
                    />
                    <InputGroup.Text className='cursor-pointer text-danger'>
                      <i className="bi bi-search"></i>
                    </InputGroup.Text>
                  </InputGroup>
                </Col>
                <Col md={9}>
                  <Button variant="primary" className='float-end' onClick={()=>addModalProduct()}>
                    <i className="bi bi-plus-lg"></i> Add Product
                  </Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col>
          <Card className="shadow-sm rounded-0">
            <Card.Header className='bg-danger text-white d-flex justify-content-between align-items-center rounded-0'>
              <span className='fw-semibold'>
                <i className="bi bi-card-list"></i> Product List
              </span>
            </Card.Header>
            <Card.Body>
              <ProductTable products={productsList} thisProduct={editModalProduct} rateThisProduct={rateProduct}/>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Products
