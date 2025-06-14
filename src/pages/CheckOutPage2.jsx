
import { useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { useState } from 'react'
import { useAuth } from '../context/AuthContext.jsx'
import { useCreateOrderMutation } from '../redux/API/order.API.js'

const CheckOutPage = () => {
  // const currentUser = true
  // TODO: Auth context or Redux state to get current user
  const { currentUser } = useAuth()
  const cartItems = useSelector((state) => state.cart.cartItems)
  const [isChecked, setIsChecked] = useState(false)

  const navigate = useNavigate()

  const totalPrice = cartItems
    .reduce((acc, item) => acc + item.newPrice, 0)
    .toFixed(2)

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  // const currentUser = true
  // TODO: Auth context or Redux state to get current user
  // const { currentUser } = useAuth()

  // const onSubmit = async (data) => {
    // const newOrder = {
      name: data.name,
      email: currentUser.email,
      // address: {
      //   city: data.city,
      //   country: data.country,
      //   state: data.state,
      //   plz: data.plz,
      // },
      city: data.city,
      street: data.street,
      country: data.country,
      state: data.state,
      plz: data.plz,
      phone: data.phone,
      productIds: cartItems.map((item) => item._id),
      totalPrice: totalPrice,
    // }

    // console.log('newOrder', newOrder)

    // const [createOrder, { isLoading, error }] = useCreateOrderMutation()

    // try {
    //   await createOrder(newOrder).unwrap()
    //   alert('Order is placed into DB')
    // } catch (error) {
    //   console.log('Place Order Error', error)
    //   alert('Failed to place an order')
    // }

    // console.log('Order Details:', newOrder)

    // try {
    // } catch (error) {
    //   alert('Failed placing an Order')
    //   console.error('Error placing an Order', error)
    // }

    // try {
    //   await createOrder(newOrder).unwrap()
    //   Swal.fire({
    //     title: 'Confirmed Order',
    //     text: 'Your order placed successfully!',
    //     icon: 'warning',
    //     showCancelButton: true,
    //     confirmButtonColor: '#3085d6',
    //     cancelButtonColor: '#d33',
    //     confirmButtonText: "Yes, It's Okay!",
    //   })
    //   navigate('/orders')
    // } catch (error) {
    //   console.error('Error place an order', error)
    //   alert('Failed to place an order')
    // }

    // const onSubmit = (data) => console.log('Form Data:', data)

    // if (isLoading) return <div> Loading ...</div>
  }
  return (
    <>
      <div className="min-h-screen p-6 bg-gray-300 flex items-center justify-center rounded-xl   ">
        <div className="container max-w-screen-lg mx-auto">
          <div>
            <div>
              <h2 className="font-bold  text-3xl text-primary mb-2">
                Pay on delivery
              </h2>
              {/* {totalPrice} */}
              <p className="text-slate-700 font-medium font-roboto mb-2">
                Total Price: {totalPrice} &euro;
              </p>
              <p className="text-slate-700 font-medium font-roboto mb-6">
                {/* Qty: {cartItems.length > 0 ? cartItems.length : 0} */}
                Qty: {cartItems.length > 0 ? cartItems.length : 0}
              </p>
            </div>

            <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3 my-8"
              >
                <div className="text-slate-800">
                  <p className="text-slate-800 text-2xl font-bold">
                    Personal Details
                  </p>
                  <p>All fields are required to fill</p>

                  <div>
                    <p> sdjfhndsjlkfhdjskfh</p>
                    <p> sdjfhndsjlkfhdjskfh</p>
                    <p> sdjfhndsjlkfhdjskfh</p>
                    <p> sdjfhndsjlkfhdjskfh</p>
                    <p> sdjfhndsjlkfhdjskfh</p>
                    <p> sdjfhndsjlkfhdjskfh</p>
                  </div>
                </div>
                <div className="lg:col-span-2">
                  <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                    <div className="md:col-span-5">
                      <label
                        htmlFor="full_name"
                        className="text-slate-800 text-lg font-bold"
                      >
                        Full Name
                      </label>
                      <input
                        {...register('name', { required: true })}
                        placeholder="Full Name"
                        type="text"
                        name="name"
                        id="name"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-100 focus:border-primary focus:ring-1 focus:ring-lime-500 outline-none"
                      />
                    </div>
                    <div className="md:col-span-5">
                      <label
                        html="email"
                        className="text-slate-800 text-lg font-bold"
                      >
                        Email Address:
                      </label>
                      <input
                        type="text"
                        name="email"
                        id="email"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-100 focus:border-primary focus:ring-1 focus:ring-lime-500 outline-none"
                        // disabled
                        defaultValue={currentUser.email}
                        placeholder="E-Mail"
                      />
                    </div>
                    <div className="md:col-span-5">
                      <label
                        html="phone"
                        className="text-slate-800 text-lg font-bold"
                      >
                        Phone Number
                      </label>
                      <input
                        {...register('phone', { required: true })}
                        type="number"
                        name="phone"
                        id="phone"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-100 focus:border-primary focus:ring-1 focus:ring-lime-500 outline-none font-roboto"
                        placeholder="0176 596 30 523"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="country"
                        className="text-slate-800 text-lg font-bold"
                      >
                        City
                      </label>
                      <input
                        {...register('city', { required: true })}
                        type="text"
                        name="city"
                        id="city"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-100 focus:border-primary focus:ring-1 focus:ring-lime-500 outline-none font-roboto"
                        // className="h-10 border mt-1 rounded px-4 w-full bg-gray-100"
                        placeholder="City"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label
                        htmlFor="address"
                        className="text-slate-800 text-lg font-bold"
                      >
                        Street address
                      </label>
                      <input
                        {...register('street', { required: true })}
                        type="text"
                        name="street"
                        id="street"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-100 focus:border-primary focus:ring-1 focus:ring-lime-500 outline-none font-roboto"
                        placeholder="Street address"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label
                        htmlFor="country"
                        className="text-slate-800 text-lg font-bold"
                      >
                        Country
                      </label>
                      <div className="h-10 bg-gray-100 flex border border-slate-100 rounded items-center ">
                        <input
                          {...register('country', { required: true })}
                          name="country"
                          id="country"
                          placeholder="Country"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-100 focus:border-primary focus:ring-1 focus:ring-lime-500 outline-none font-roboto"
                        />
                        <button
                          tabIndex="-1"
                          className="cursor-pointer outline-none focus:outline-none transition-all text-slate-600 hover:text-red-600"
                        >
                          <svg
                            className="w-4 h-4 mx-2 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                          </svg>
                        </button>
                        <button
                          tabIndex="-1"
                          className="cursor-pointer outline-none focus:outline-none border-l border-slate-600 transition-all text-slate-600 hover:text-blue-600"
                        >
                          <svg
                            className="w-4 h-4 mx-2 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="18 15 12 9 6 15"></polyline>
                          </svg>
                        </button>
                      </div>
                    </div>

                    <div className="md:col-span-2">
                      <label
                        htmlFor="state"
                        className="text-slate-800 text-lg font-bold"
                      >
                        State
                      </label>
                      <div className="h-10 bg-gray-100 flex border border-gray-200 rounded items-center mt-1">
                        <input
                          {...register('state', { required: true })}
                          name="state"
                          id="state"
                          placeholder="State"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-100 focus:border-primary focus:ring-1 focus:ring-lime-500 outline-none font-roboto"
                        />
                        <button className="cursor-pointer outline-none focus:outline-none transition-all  text-slate-600 hover:text-red-600">
                          <svg
                            className="w-4 h-4 mx-2 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                          </svg>
                        </button>
                        <button
                          tabIndex="-1"
                          className="cursor-pointer outline-none focus:outline-none border-l border-gray-600 transition-all  text-slate-600 hover:text-blue-600"
                        >
                          <svg
                            className="w-4 h-4 mx-2 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="18 15 12 9 6 15"></polyline>
                          </svg>
                        </button>
                      </div>
                    </div>

                    <div className="md:col-span-1">
                      <label
                        htmlFor="plz"
                        className="text-slate-800 text-lg font-bold"
                      >
                        PLZ
                      </label>
                      <input
                        {...register('plz', { required: true })}
                        type="text"
                        name="plz"
                        id="plz"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-100 focus:border-primary focus:ring-1 focus:ring-lime-500 outline-none font-roboto"
                        placeholder="PLZ"
                      />
                    </div>

                    <div className="md:col-span-5 mt-3">
                      <div className="inline-flex items-center">
                        <input
                          onChange={(e) => setIsChecked(e.target.checked)}
                          type="checkbox"
                          name="billing_same"
                          id="billing_same"
                          className="w-4 h-4 text-blue-800 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-800 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label htmlFor="billing_same" className="ml-2 ">
                          I am agree with Terms & Conditions
                        </label>
                      </div>
                    </div>

                    <div className="md:col-span-5 text-right">
                      <div className="inline-flex items-end">
                        <button
                          type="submit"
                          // disabled={!isChecked}
                          className=" cursor-pointer bg-slate-800 px-4 py-2 rounded-xl space-x-1 flex items-center gap-1 text-neutral-300 text-lg font-medium hover:bg-slate-950 hover:text-lime-500 transition duration-300 ease-in-out"
                        >
                          Place an Order
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CheckOutPage
