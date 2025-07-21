import React from 'react'
import ProductRow from './ProductRow'

const ProductTable = ({ products, thisProduct, rateThisProduct }) => {

  return (
    <div className="table-container">
      <table className="table table-bordered table-hover table-striped">
        <thead className="table-danger">
          <tr>
            <th width="3%" className="text-center">#</th>
            <th width="20%">Name</th>
            <th width="32%">Description</th>
            <th width="6">Image</th>
            <th width="4%">Rate</th>
            <th width="8%">Price</th>
            <th width="10%">Category</th>
            <th width="5%">Stock</th>
            <th width="12%" className="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.length > 0 ? (
            products.map((product, index) => (
              <ProductRow key={product._id} index={index} product={product} selectedProduct={thisProduct} rateProduct={rateThisProduct}/>
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
    </div>
  )
}

export default ProductTable
