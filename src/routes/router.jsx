import { createBrowserRouter } from 'react-router-dom'
import App from '../App.jsx'

import HomePage from '../pages/HomePage.jsx'
import LoginPage from '../pages/LoginPage.jsx'
import RegisterPage from '../pages/RegisterPage.jsx'
import ShoppingCart from '../pages/ShoppingCart.jsx'
import CheckOutPage from '../pages/CheckOutPage.jsx'
import ProductItemPage from '../pages/ProductItemPage.jsx'
import PrivetRoute from './PrivetRoute.jsx'
import OrdersPage from '../pages/OrdersPage.jsx'
import AdminLoginPage from '../pages/AdminLoginPage.jsx'
import AdminDashboard from '../pages/AdminDashboard.jsx'
import AdminLayout from '../pages/AdminLayout.jsx'

import AddProduct from '../components/AddProduct.jsx'
import UpdateProduct from '../components/UpdateProduct.jsx'
import ControlProducts from '../components/ControlProducts.jsx'

import AdminRoute from '../routes/AdminRoute.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/orders',
        element: (
          <PrivetRoute>
            <OrdersPage />
          </PrivetRoute>
        ),
      },
      {
        path: '/about',
        element: <h1 className="font-main">About</h1>,
      },
      {
        path: '/login',
        element: <LoginPage />,
      },
      {
        path: '/register',
        element: <RegisterPage />,
      },
      {
        path: '/cart',
        element: (
          <PrivetRoute>
            <ShoppingCart />
          </PrivetRoute>
        ),
      },
      {
        path: '/checkout',
        element: (
          <PrivetRoute>
            <CheckOutPage />
          </PrivetRoute>
        ),
      },
      {
        path: '/vinyls/:id',
        // path: '/productitem',
        element: <ProductItemPage />,
      },
    ],
  },

  { path: '/admin', element: <AdminLoginPage /> },

  {
    path: '/dashboard',
    element: (
      <AdminRoute>
        <AdminLayout />
      </AdminRoute>
    ),
    children: [
      {
        path: '',
        element: (
          <AdminRoute>
            <AdminDashboard />
          </AdminRoute>
        ),
      },

      {
        path: 'add-vinyl',
        element: (
          <AdminRoute>
            <AddProduct />
          </AdminRoute>
        ),
      },

      {
        path: 'edit-vinyl/:id',
        element: (
          <AdminRoute>
            <UpdateProduct />
            {/* <div>UPDATE</div> */}
          </AdminRoute>
        ),
      },

      {
        path: 'control-vinyls',
        element: (
          <AdminRoute>
            <ControlProducts />
          </AdminRoute>
        ),
      },
    ],
  },
])

export default router
