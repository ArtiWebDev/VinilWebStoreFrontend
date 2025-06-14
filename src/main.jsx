import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'

import { RouterProvider } from 'react-router-dom'
import { store } from './redux/store.js'
import router from './routes/router.jsx'

import 'sweetalert2/src/sweetalert2.scss'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)
