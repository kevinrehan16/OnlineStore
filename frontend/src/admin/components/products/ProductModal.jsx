import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Modal, Form } from 'react-bootstrap';
import Swal from 'sweetalert2'
import { API_URL } from '../../../config';

const ProductModal = ({refreshTableProducts, show, handleClose, productInfo, savingType}) => {
  const [errors, setErrors] = useState([]);

  const defaultProductForm = {
    _id: "",
    name: "",
    description: "",
    price: 0.00,
    stock: 0,
    category: "",
    image: ""
  };
  
  const [productForm, setProductForm] = useState({
    name: "",
    description: "",
    price: 0.00,
    stock: 0,
    category: "",
    image: ""
  })
  
  const saveProduct = async (e) => {
    e.preventDefault();
    try {
      // let data = "";
      if(savingType == "insert"){
        const data = await axios.post(`${API_URL}/api/products/save`, productForm);
      }
      else{
        const data = await axios.put(`${API_URL}/api/products/update`, productForm, {
          headers: {
            "Content-Type": "application/json"
          }
        });
      }

      // console.log(data);
      setProductForm(defaultProductForm);
      Swal.fire({
        title: productForm.name + " has been saved successfully.",
        icon: "success",
        draggable: true
      });

      refreshTableProducts();
      handleClose();
    } catch (err) {
      setErrors(err?.response?.data.errors);
    }
  }

  const handleForm = (e) => {
    const {name, value} = e.target;

    setProductForm(prev => {
      return ({
        ...prev,
        [name]: value
      })
    })
  }

  useEffect(() => {
    if (productInfo) {
      setProductForm({
        _id: productInfo?._id, // Add this
        name: productInfo?.name,
        description: productInfo?.description,
        price: productInfo?.price,
        stock: productInfo?.stock,
        category: productInfo?.category,
        image: productInfo?.image
      });
    }

    // console.log(productForm);
  }, [productInfo])

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header className='bg-danger text-white' closeButton>
          <Modal.Title><i className="bi bi-box-seam-fill"></i> {savingType == "insert" ? "New Product" : "Update Product" } </Modal.Title>
        </Modal.Header>
        <Form onSubmit={saveProduct}>
          <Modal.Body>
              <Form.Group className="mb-2" controlId="formBasicProduct">
                <Form.Label>Product Name</Form.Label>
                <Form.Control type="text" name='name' placeholder="Enter product" value={productForm.name || ""} onChange={handleForm} />
                {errors.name && 
                (<Form.Text className="text-danger">
                  {errors.name}
                </Form.Text>)}
              </Form.Group>

              <Form.Group className="mb-2" controlId="formBasicDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" name='description' placeholder="Enter description" value={productForm.description || ""} onChange={handleForm} />
              </Form.Group>

              <Form.Group className="mb-2" controlId="formBasicPrice">
                <Form.Label>Price</Form.Label>
                <Form.Control type="number" name='price' placeholder="Enter price" value={productForm.price || ""} onChange={handleForm} />
                {errors.price && 
                (<Form.Text className="text-danger">
                  {errors.price}
                </Form.Text>)}
              </Form.Group>

              <Form.Group className="mb-2" controlId="formBasicRate">
                <Form.Label>Rate</Form.Label>
                <Form.Control type="number" name='rate' placeholder="Enter rate" />
                {/* {errors.rate && 
                (<Form.Text className="text-danger">
                  {errors.rate}
                </Form.Text>)} */}
              </Form.Group>

              <Form.Group className="mb-2" controlId="formBasicStock">
                <Form.Label>Stock</Form.Label>
                <Form.Control type="number" name='stock' placeholder="Enter stock" value={productForm.stock || ""} onChange={handleForm} />
                {errors.stock && 
                (<Form.Text className="text-danger">
                  {errors.stock}
                </Form.Text>)}
              </Form.Group>

              <Form.Group className="mb-2" controlId="formBasicCategory">
                <Form.Label>Category</Form.Label>
                <Form.Control type="text" name='category' placeholder="Enter category" value={productForm.category || ""} onChange={handleForm} />
                {errors.category && 
                (<Form.Text className="text-danger">
                  {errors.category}
                </Form.Text>)}
              </Form.Group>

              <Form.Group className="mb-2" controlId="formBasicImage">
                <Form.Label>Image</Form.Label>
                <Form.Control type="text" name='image' placeholder="Enter image" value={productForm.image || ""} onChange={handleForm} />
                {errors.image && 
                (<Form.Text className="text-danger">
                  {errors.image}
                </Form.Text>)}
              </Form.Group>
            
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              <i className="bi bi-x-square"></i> Close
            </Button>
            <Button variant="primary" type="submit">
               {savingType == "insert" ? (<><i className="bi bi-floppy"></i> Save</>) : (<><i className="bi bi-pencil-square"></i> Update</>) }
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  )
}

export default ProductModal
