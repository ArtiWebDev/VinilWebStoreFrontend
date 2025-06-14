import { createSlice } from '@reduxjs/toolkit'
import Swal from 'sweetalert2'

const initialState = {
  cartItems: [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addToCart: (state, action) => {
      // Check is in Cart or not

      const existingItem = state.cartItems.find(
        (item) => item._id === action.payload._id
      )

      if (!existingItem) {
        state.cartItems.push(action.payload)
        // alert('+ Product Added to the Cart +')
        Swal.fire({
          //  position: 'top-start',
          icon: 'success',
          title: 'Product Added to the Shopping Cart',
          showConfirmButton: false,
          timer: 1600,
        })
      }
      // alert('Product is already in the Cart')
      else
        Swal.fire({
          title: 'Product already added to the Shopping Cart',
          //  text: "Return is impossible!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#052f4a',
          cancelButtonColor: '#c10007',
          confirmButtonText: 'OK!',
        })
    },

    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item._id !== action.payload._id
      )
    },
    clearCart: (state) => {
      state.cartItems = []
    },
  },
})

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions
export default cartSlice.reducer
