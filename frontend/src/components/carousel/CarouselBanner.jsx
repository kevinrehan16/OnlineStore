import React from 'react'
import { Carousel, Row, Col } from 'react-bootstrap'

const CarouselBanner = () => {
  return (
    <Row>
      <Col>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100 object-fit-cover"
              src="/assets/images/banners/banner1.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Big Sale</h3>
              <p>Up to 50% off on selected items!</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100  object-fit-cover"
              src="/assets/images/banners/banner2.jpg"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>New Arrivals</h3>
              <p>Check out the latest gadgets in store.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100  object-fit-cover"
              src="/assets/images/banners/banner3.jpg"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Shop Smart</h3>
              <p>Unbeatable prices every day.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Col>
    </Row>
  )
}

export default CarouselBanner
