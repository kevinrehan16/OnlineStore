import React from 'react'
import ProductRow from './ProductRow'

const ProductTable = ({ products }) => {
  return (
    <table className="table table-bordered table-hover">
      <thead className="table-light">
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Description</th>
          <th>Image</th>
          <th>Rate</th>
          <th>Price</th>
          <th>Category</th>
          <th>Stock</th>
          <th className="text-center">Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.length > 0 ? (
          products.map((product, index) => (
            <ProductRow key={product._id} index={index} product={product} />
          ))
        ) : (
          <tr>
            <td colSpan="9" className="text-center py-4 text-muted">
              <i className="bi bi-box"></i> No products found.
            </td>
          </tr>
        )}
      </tbody>
    </table>
  )
}

export default ProductTable
