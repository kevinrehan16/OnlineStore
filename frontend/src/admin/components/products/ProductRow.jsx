import React from 'react'

const ProductRow = ({ product, index }) => {
  
  return (
    <tr className="align-middle">
      <td>{index + 1}</td>
      <td>{product.name}</td>
      <td>{product.description}</td>
      <td className="text-center">
        <img src={product.image} alt={product.name} style={{ width: '50px', height: '50px' }} />
      </td>
      <td className='text-center'>{product.rate}</td>
      <td className="text-end">{product.price.toLocaleString()}</td>
      <td>{product.category}</td>
      <td className="text-center">{product.stock}</td>
      <td className="text-center">
        <button className="btn btn-sm btn-primary me-2">
          <i className="bi bi-pencil-square"></i> Edit
        </button>
        <button className="btn btn-sm btn-danger">
          <i className="bi bi-trash"></i> Delete
        </button>
      </td>
    </tr>
  )
}

export default ProductRow
