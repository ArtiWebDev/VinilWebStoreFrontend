import { Link } from 'react-router-dom'
import { getImgUrl } from '../utils/getImgUrl'
import { FiShoppingCart } from 'react-icons/fi'
import { useDispatch } from 'react-redux'

import { addToCart } from '../redux/Slices/cartSlice.js'

const VinylCard = ({ vinyl }) => {
  const dispatch = useDispatch()

  const handleAddToCart = (product) => {
    dispatch(addToCart(product))
  }

  return (
    <div>
      <div class="w-full max-w-lg bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        <div className="flex flex-col sm:flex-row items-center sm:h-72  justify-center gap-1">
          <div className="sm:h-72 sm:flex-shrink-0 shadow-md  rounded-xl">
            <Link to={`/vinyls/${vinyl._id}`}>
              <img
                src={`${getImgUrl(vinyl.coverImage)}`}
                alt=""
                className=" bg-cover size-70 p-2 rounded-md cursor-pointer hover:scale-105 transition-all duration-200"
              />
            </Link>
          </div>

          <div className="h-full   w-full px-4  py-3     flex flex-col justify-between items-center">
            <div className="">
              {/* Description Block */}

              <div className="flex flex-col justify-start">
                <Link to={`/vinyls/${vinyl._id}`}>
                  <h3 className="text-xl font-bold text-slate-800 hover:text-slate-950 hover:scale-110 mb-1  transition  duration-400 ease-in-out  ">
                    {vinyl.title}
                  </h3>
                </Link>
                <span className="text-sm font-semibold mb-1">
                  Genre: {vinyl.category}
                </span>
                {/* <span className="text-sm font-semibold mb-2 flex flex-row  h-8      items-end bg-amber-300">
                  <div className="flex flex-row items-center">
                    <p className="text-2xl"> Price: </p>
                    <p className="text-2xl"> {vinyl.newPrice} </p>
                  </div>

                  <span className="px-1">&#8364;</span> 
                </span> */}

                <div className="flex flex-row items-end mb-2    ">
                  <p className="text-2xl font-semibold"> Price:</p>
                  <p className=" text-3xl font-roboto font-bold  pl-1">
                    {vinyl.newPrice}
                  </p>
                  <span className="px-1 text-2xl font-roboto font-semibold  ">
                    &#8364;
                  </span>
                </div>
                <p className="text-gray-600 text-sm font-medium  mb-3   ">
                  {vinyl.description.length > 90
                    ? `${vinyl.description.slice(0, 98)}  ...`
                    : vinyl.description}
                </p>
              </div>
            </div>
            <div className="">
              {/* Button */}
              <button
                onClick={() => handleAddToCart(vinyl)}
                className="bg-slate-800 cursor-pointer px-4 py-2 rounded-xl space-x-1 flex items-center gap-1 text-neutral-300 text-lg font-medium hover:bg-slate-950 hover:text-lime-500 hover:font-semibold transition duration-300 ease-in-out"
              >
                <FiShoppingCart className="" />
                <span>Add to Cart</span>
              </button>
            </div>
          </div>

          {/* <div className=" bg-amber-300 h-full   w-full px-4  py-3     flex flex-col justify-start items-center">
            <Link to={`/books/${vinyl._id}`}>
              <h3 className="text-xl font-bold hover:text-blue-600 mb-3   ">
                {vinyl.title}
              </h3>
            </Link>

            <p className="font-medium mb-5">
              {
                <span className="line-through font-normal ml-2">
                  $ {book?.oldPrice}
                </span>
              }{' '}
              ${vinyl.category}{' '}
              <span className="line-through font-normal ml-2">
                $ {book?.oldPrice}
              </span>
            </p>
            <p>asdfsadsadsadsa</p>
            <p>asdfsadsadsadsa</p>
            <p>asdfsadsadsadsa</p>
          </div> */}

          {/* <div className="flex flex-col justify-between items-center bg-amber-400">
            <Link to={`/books/${vinyl._id}`}>
              <h3 className="text-xl font-semibold hover:text-blue-600 mb-3">
                {vinyl.title}
              </h3>
            </Link>

            <div className="bg-amber-800">
              <p>sdfsdfdsfdsf</p>
            </div>
          </div> */}
        </div>
      </div>

      {/* <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img
            class="p-8 rounded-t-lg"
            src="/docs/images/products/apple-watch.png"
            alt="product image"
          />
        </a>
        <div class="px-5 pb-5">
          <a href="#">
            <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
            </h5>
          </a>
          <div class="flex items-center mt-2.5 mb-5">
            <div class="flex items-center space-x-1 rtl:space-x-reverse">
              <svg
                class="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                class="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                class="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                class="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                class="w-4 h-4 text-gray-200 dark:text-gray-600"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
            </div>
            <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800 ms-3">
              5.0
            </span>
          </div>
          <div class="flex items-center justify-between">
            <span class="text-3xl font-bold text-gray-900 dark:text-white">
              $599
            </span>
            <a
              href="#"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Add to cart
            </a>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default VinylCard
