import React from 'react'
import Image from 'react-bootstrap/Image';

const ProductRow = ({ product, index }) => {
  
  return (
    <tr className="align-middle">
      <td className="text-center">{index + 1}</td>
      <td>{product.name}</td>
      <td>{product.description.length > 50 ? product.description.substring(0, 50) + '...' : product.description}</td>
      <td className="text-center">
        <Image src={product.image} thumbnail alt={product.name} style={{ width: '50px', height: '50px', border: '1px solid #dc3545' }} />
      </td>
      <td className='text-center'>{product.rate}</td>
      <td className="text-end">{product.price.toLocaleString()}</td>
      <td>{product.category}</td>
      <td className="text-center">{product.stock}</td>
      <td className="text-center">
        <button className="btn btn-sm btn-primary me-1">
          <i className="bi bi-pencil-square"></i>
        </button>
        <button className="btn btn-sm btn-warning text-white">
          <i className="bi bi-trash"></i>
        </button>
      </td>
    </tr>
  )
}

export default ProductRow
