import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './Slices/cartSlice.js'
import vinylsApi from './API/vinylAPI.js'
import orderApi from './API/order.API.js'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    // RTQ

    [vinylsApi.reducerPath]: vinylsApi.reducer,
    [orderApi.reducerPath]: orderApi.reducer,
  },
  // middelware, runs before route
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(vinylsApi.middleware, orderApi.middleware),
})
