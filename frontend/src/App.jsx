import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'
import { CartProvider } from './context/CartContext';
import { AdminAuthProvider } from './admin/context/AdminAuthContext';
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <AdminAuthProvider>
        <CartProvider>
          <AppRoutes />
        </CartProvider>
      </AdminAuthProvider>
    </BrowserRouter>
  )
}

export default App
