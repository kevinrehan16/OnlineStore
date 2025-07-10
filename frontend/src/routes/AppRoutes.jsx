import React from 'react'
import { Routes, Route } from 'react-router-dom';

// FrontEnd Layout
import Layout from '../components/layout/Layout';
import Home from '../pages/Home'
import ProductDetails from '../pages/ProductDetails'
import Cart from '../pages/Cart'
import Checkout from '../pages/Checkout'
import NotFound from '../pages/NotFound'

// Admin Layout
import AdminProtectedRoute from '../admin/routes/AdminProtectedRoute';
import AdminLogin from '../admin/pages/AdminLogin';
import AdminLayout from '../admin/AdminLayout';
import Dashboard from '../admin/pages/Dashboard';
import Products from '../admin/pages/Products';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Store Routes */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="product/:id" element={<ProductDetails />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="*" element={<NotFound />} />
      </Route>

      <Route path="/mystore/admin/login" element={<AdminLogin />} />
      {/* Admin Routes */}
        <Route path="/mystore/admin" element={
          <AdminProtectedRoute>
            <AdminLayout />
          </AdminProtectedRoute>
        }>
        <Route index element={<Dashboard />} />
        <Route path="/mystore/admin/dashboard" element={<Dashboard />} />
        <Route path="/mystore/admin/products" element={<Products />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes
