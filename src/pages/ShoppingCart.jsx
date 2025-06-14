import { useDispatch, useSelector } from 'react-redux'

import { removeFromCart, clearCart } from '../redux/Slices/cartSlice.js'
import { Link } from 'react-router-dom'

import { getImgUrl } from '../utils/getImgUrl.js'

const ShoppingCart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems)
  const dispatch = useDispatch()

  const totalPrice = cartItems
    .reduce((accumulator, item) => accumulator + item.newPrice, 0)
    .toFixed(2)

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product))
  }

  const handleClearCart = () => {
    dispatch(clearCart())
  }
  return (
    <>
      <div className="flex mt-12 h-full flex-col overflow-hidden bg-white shadow-xl">
        <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
          <div className="flex items-start justify-between">
            <div className="text-2xl font-semibold text-slate-900">
              Shopping Cart
            </div>
            <div className="ml-3 flex h-7 items-center ">
              <button
                type="button"
                onClick={handleClearCart}
                className="relative py-1 px-2 bg-red-500 text-white font-semibold rounded-md hover:bg-red-900 transition-all duration-400 cursor-pointer "
              >
                <span className="">Delete All</span>
              </button>
            </div>
          </div>

          <div className="mt-7">
            <div className="flow-root">
              {cartItems.length > 0 ? (
                <ul role="list" className="-my-6 divide-y divide-gray-200">
                  {cartItems.map((product) => (
                    <li key={product?._id} className="flex py-6">
                      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <img
                          alt=""
                          src={`${getImgUrl(product?.coverImage)}`}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>

                      <div className="ml-4 flex flex-1 flex-col">
                        <div>
                          <div className="flex flex-wrap justify-between text-base font-medium text-gray-900">
                            <h3 className="text-xl font-bold">
                              <Link to="/">{product?.title}</Link>
                            </h3>
                            <p className="sm:ml-4 font-roboto text-2xl">
                              {product?.newPrice} &euro;
                            </p>
                          </div>
                          <p className="mt-1 text-sm text-gray-500 capitalize">
                            <strong>Category: </strong>
                            {product?.category}
                          </p>
                        </div>
                        <div className="flex flex-1 flex-wrap items-end justify-between space-y-2 text-sm">
                          <p className="text-gray-500">
                            <strong>Qty:</strong> 1
                          </p>

                          <div className="flex">
                            <button
                              onClick={() => handleRemoveFromCart(product)}
                              type="button"
                              className="font-roboto text-md text-red-900 hover:text-red-500  hover:font-semibold"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No product found!</p>
              )}
            </div>
          </div>
        </div>

        {/* ///////////////////////////////////////////// */}

        {/* <div className="border-t border-gray-300 divide-y-1px-10 py-6 sm:px-6">
          <div className="flex justify-between text-base font-medium text-gray-900">
            <p> Price </p>
            <p>${totalPrice ? totalPrice : 0}</p>
            <p>0 &euro;</p>
          </div>

          <p className="mt-0.5 text-sm text-gray-500">Price and shipping.</p>
          <div className="mt-6 flex justify-center">
            <Link
              to="/checkout"
              className=" w-1/10  flex items-center justify-center rounded-md border  bg-primary px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-sky-950  hover:text-lg border-slate-900  transition-all duration-400 cursor-pointer"
            >
              Checkout
            </Link>
          </div>

          <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
            <Link to="/">
              <button
                type="button"
                className="font-medium text-primary hover:text-slate-900 cursor-pointer ml-1"
              >
                Continue Shopping
                <span aria-hidden="true"> &rarr;</span>
              </button>
            </Link>
          </div>
        </div> */}

        {/* ///////////////////////////////////////////// */}

        <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
          <div className="flex justify-between text-base font-medium text-gray-900">
            <p className="text-lg font-bold">Total price</p>
            <p className="font-semibold  font-roboto text-3xl ">
              {totalPrice ? totalPrice : 0} &euro;
            </p>
          </div>
          <p className="mt-0.5 text-sm text-gray-600">
            Free shipping and returns.
          </p>
          <div className="mt-6 flex justify-center">
            <Link
              to="/checkout"
              className=" w-1/8   flex items-center justify-center rounded-md border  bg-primary px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-sky-950  border-slate-900  transition-all duration-400 cursor-pointer"
            >
              Checkout
            </Link>
          </div>
          <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
            <Link to="/">
              <button
                type="button"
                className="font-medium text-primary hover:text-slate-900 cursor-pointer ml-1"
              >
                Continue Shopping
                <span aria-hidden="true"> &rarr;</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default ShoppingCart
