import { useParams } from 'react-router-dom'
import { FiShoppingCart } from 'react-icons/fi'
import { getImgUrl } from '../utils/getImgUrl.js'
import { useDispatch } from 'react-redux'

import { useFetchVinylByIdQuery } from '../redux/API/vinylAPI.js'
import { addToCart } from '../redux/Slices/cartSlice.js'

const ProductItemPage = () => {
  const { id } = useParams()
  const { data: vinyl, isLoading, isError } = useFetchVinylByIdQuery(id)

  //console.log('sdfsdf', vinyl._id)

  const dispatch = useDispatch()

  const handleAddToCart = (product) => {
    dispatch(addToCart(product))
  }

  if (isLoading) return <div>Is Loading...</div>
  if (isError) return <div>Load vinyl Error</div>
  return (
    <>
      <div className="h-[calc(100vh-120px)] flex justify-center items-center">
        <div className="w-full max-w-4xl mx-auto  bg-white shadow-md rounded px-4 pt-4 pb-8 mb-2 flex flex-col md:flex-row">
          <div className="flex-1/2 flex-col">
            <div className="">
              <h1 className=" text-center text-2xl font-bold text-slate-800 hover:text-slate-850  mb-2  transition  duration-400 ease-in-out ">
                {vinyl.title}
              </h1>
            </div>

            <div className="flex flex-row justify-center py-3 ">
              <img
                src={`${getImgUrl(vinyl.coverImage)}`}
                alt=""
                className=" bg-cover size-100  rounded-md cursor-pointer hover:scale-102 transition-all duration-200"
              />
            </div>
          </div>
          <div className="flex-1/2 flex flex-col justify-between  ">
            <div className="flex flex-col justify-start">
              <div className="flex-1/2 px-2">
                <div class="py-1 flex items-center text-lg text-gray-800 font-semibold before:flex-1 before:border-t before:border-gray-400 before:me-6 after:flex-1 after:border-t after:border-gray-400 after:ms-6 dark:text-white dark:before:border-neutral-800 dark:after:border-neutral-800">
                  Description
                </div>
              </div>

              <div>
                <p className="text-gray-600 text-lg font-normal mt-3 mb-3 indent-2  ">
                  {vinyl.description.length > 590
                    ? `${vinyl.description.slice(0, 598)}  ...`
                    : vinyl.description}
                </p>
              </div>

              <div>
                <span className="text-md font-semibold ">
                  Genre: {vinyl.category}
                </span>
              </div>

              <div className="flex flex-row items-center mt-4    ">
                <p className="text-2xl font-bold"> Price:</p>
                <p className=" text-3xl font-bold font-roboto pb-0.5 pl-1">
                  {vinyl.newPrice}
                </p>
                <span className="px-1 text-2xl font-roboto font-semibold  ">
                  &#8364;
                </span>
              </div>
            </div>

            <div className="flex flex-row justify-center pb-4">
              <button
                onClick={() => handleAddToCart(vinyl)}
                className="bg-slate-800 px-4 py-2 rounded-xl space-x-1 flex items-center gap-1 text-neutral-300 text-lg font-medium hover:bg-slate-950 hover:text-lime-500 hover:font-semibold transition duration-300 ease-in-out"
              >
                <FiShoppingCart className="" />
                <span>Add to Cart</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="h-[calc(100vh-120px)] flex justify-center items-center">
        <div className="w-full max-w-4xl mx-auto  bg-white shadow-md rounded px-4 pt-4 pb-8 mb-2 flex flex-row">
          <div className="flex-1/2 flex-col">
            <div className="">
              <h1 className=" text-center text-2xl font-bold text-slate-800 hover:text-slate-850  mb-2  transition  duration-400 ease-in-out ">
                {vinyl.title}
              </h1>
            </div>

            <div className="flex flex-row justify-center py-3 ">
              <img
                // src={`${getImgUrl(vinyl.coverImage)}`}
                alt=""
                className=" bg-cover size-100  rounded-md cursor-pointer hover:scale-102 transition-all duration-200"
              />
            </div>
          </div>
        </div>
      </div> */}
    </>
  )
}

export default ProductItemPage
