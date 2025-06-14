import { useAuth } from '../context/AuthContext'
import { FiShoppingCart } from 'react-icons/fi'
import { MdKeyboardDoubleArrowLeft } from 'react-icons/md'
import { useGetOrderByEmailQuery } from '../redux/API/order.API.js'
import { Link, useNavigate } from 'react-router-dom'

const Orders = () => {
  const { currentUser } = useAuth()
  const navigate = useNavigate()

  const {
    data: orders = [],
    isLoading,
    isError,
  } = useGetOrderByEmailQuery(currentUser.email)
  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error fetch Order List</div>

  console.log('Orders', orders)
  return (
    <>
      <div className="container mx-auto p-6">
        <div className="flex flex-col">
          <div className=" ">
            <div className="flex flex-col items-center justify-between">
              <h1 className="font-bold text-3xl text-primary ">Orders</h1>
              <hr class="my-3 h-0.5 w-120 border-t-0 bg-neutral-300" />

              <div className="">
                <div className="flex flex-col items-start">
                  <div className="text-gray-600 text-lg font-normal mt-2">
                    {orders.map((order, index) => (
                      <div key={order._id} className="border-b mb-4 pb-4">
                        <p className="p-1 bg-secondary text-white w-10 rounded mb-1">
                          # {index + 1}
                        </p>
                        <h2 className="font-bold">Order ID: {order._id}</h2>
                        <span className=" font-normal text-lg font-roboto">
                          Name: {order.name}
                        </span>
                        <p className=" font-normal text-lg font-roboto">
                          Email: {order.email}
                        </p>
                        <p className=" font-normal text-lg font-roboto">
                          Phone: {order.phone}
                        </p>
                        <p className=" mt-1 text-lg font-bold font-roboto">
                          Total Price: ${order.totalPrice}
                        </p>
                        <h3 className="font-semibold font-roboto mt-2">
                          Address:
                        </h3>
                        <p className="font-roboto">
                          {order.city}, {order.state}, {order.country},{' '}
                          {order.plz}
                        </p>
                        {/* <p className="text-gray-600">
                          Created At: {order.createdAt}
                        </p> */}
                        <h3 className="font-semibold mt-2">Products Id:</h3>
                        <ul>
                          {order.productIds.map((productId) => (
                            <li className="font-roboto" key={productId}>
                              {productId}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center mt-8 pb-4">
          <Link to="/">
            <button className="bg-slate-800 px-2 py-1 rounded-xl space-x-1 flex items-center gap-1 text-neutral-300 text-lg font-medium hover:bg-slate-950 hover:text-blue-900 hover:font-semibold transition duration-300 ease-in-out">
              <MdKeyboardDoubleArrowLeft className=" size-8" />
              <span>Back to Shop</span>
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Orders

// <div className="container mx-auto p-6">
//   <div className="flex flex-col items-center justify-start">

//     <h1 className="font-bold text-3xl text-primary ">Orders Received</h1>
//     <hr class="my-3 h-0.5 w-120 border-t-0 bg-neutral-300" />

//     <div className=" w-120">
//       <div>
//         <h3 className="font-semibold text-xl text-primary ">
//           Orders Received:
//         </h3>
//       </div>

//       <div>
//         <h3 className="font-semibold text-xl text-primary ">
//           Address to deliver:
//           {/* <p className="text-gray-600">Name: {order.name}</p> */}
//           <div className="text-gray-600 text-lg font-normal mt-2">
//             <span className=" flex flex-row items-baseline font-semibold">
//               Full Name:
//               <p className="px-2 font-normal text-base"> Name Name</p>
//             </span>

//             <div className="flex flex-row items-baseline flex-wrap">
//               <p className=" text-lg font-semibold">Address:</p>
//               <p className="px-1 font-normal text-base ml-1"> Country</p>
//               <p className="px-1 font-normal text-base"> City</p>
//               <p className="px-1 font-normal text-base"> PLZ</p>
//               <p className="px-1 font-normal text-base">Street address</p>
//             </div>

//             <span className=" flex flex-row items-baseline font-semibold">
//               Phone:
//               <p className="px-2 font-normal text-base font-roboto">
//                 5464687468416
//               </p>
//             </span>
//           </div>
//         </h3>
//       </div>

//       <div className="flex flex-row justify-center mt-4 pb-4">
//         <button className="bg-slate-800 px-2 py-1 rounded-xl space-x-1 flex items-center gap-1 text-neutral-300 text-lg font-medium hover:bg-slate-950 hover:text-blue-900 hover:font-semibold transition duration-300 ease-in-out">
//           <MdKeyboardDoubleArrowLeft className=" size-8" />
//           <span>Back to Shop</span>
//         </button>
//       </div>
//     </div>
//   </div>
// </div>
