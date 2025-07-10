import React from 'react'
import { Container } from 'react-bootstrap'

const NotFound = () => {
  return (
    <Container className="my-5">
      <h1 className="text-center">404 - Not Found</h1>
      <p className="text-center">Sorry, the page you are looking for does not exist.</p>
    </Container>
  )
}

export default NotFound
