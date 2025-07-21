import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'
import { CartProvider } from './context/CartContext';
import { ProductProvider } from './context/productContext';
import { AdminAuthProvider } from './admin/context/AdminAuthContext';
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <AdminAuthProvider>
        <CartProvider>
          <ProductProvider>
            <AppRoutes />
          </ProductProvider>
        </CartProvider>
      </AdminAuthProvider>
    </BrowserRouter>
  )
}

export default App
