import { Link, useNavigate } from 'react-router-dom'
import {
  useFetchAllVinylsQuery,
  useDeleteVinylMutation,
} from '../redux/API/vinylAPI'

import { getImgUrl } from '../utils/getImgUrl'

const ControlProducts = () => {
  const { data: vinyls, refetch } = useFetchAllVinylsQuery()
  const [deleteVinyl] = useDeleteVinylMutation()
  const navigate = useNavigate()

  //Delete Product
  const handleDeleteProduct = async (id) => {
    try {
      await deleteVinyl(id).unwrap()
      alert('Product deleted successfully')
      refetch()
    } catch (error) {
      console.error('Failed to delete product', error.message)
      alert('Failed to delete product')
    }
  }
  return (
    <>
      <section className="py-1 bg-blueGray-40">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto ml-12 mt-4">
          <div className="relative flex flex-col min-w-180 p-4 break-words bg-white w-full mb-6 shadow-lg rounded ">
            <div className="mx-auto text-2xl text-primary font-semibold mb-0 px-4 py-1">
              <p>All Products</p>
            </div>

            <div className="py-3 flex items-center text-sm text-gray-800 before:flex-1 before:border-t before:border-gray-200 before:me-6 after:flex-1 after:border-t after:border-gray-200 after:ms-6 dark:text-white dark:before:border-neutral-600 dark:after:border-neutral-600">
              Manage Products
            </div>

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Product name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Genre
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Cover Image
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Price
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Edit
                    </th>

                    <th scope="col" className="px-6 py-3">
                      Delete
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Apple MacBook Pro 17"
                    </th>
                    <td class="px-6 py-4">Silver</td>
                    <td class="px-6 py-4">Image</td>
                    <td class="px-6 py-4">$2999</td>
                    <td class="px-6 py-4">
                      <a
                        href="#"
                        class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Edit
                      </a>
                    </td>

                    <td class="px-6 py-4">
                      <a
                        href="#"
                        class="font-medium text-red-600 hover:underline"
                      >
                        Delete
                      </a>
                    </td>
                  </tr> */}

                  {vinyls &&
                    vinyls.map((vinyl, index) => (
                      <tr
                        key={index}
                        className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200"
                      >
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {vinyl.title}
                        </th>
                        <td className="px-6 py-4">{vinyl.category}</td>
                        <td className="px-6 py-4">
                          <img
                            src={`${getImgUrl(vinyl.coverImage)}`}
                            alt=""
                            className=" bg-cover size-10 p-2 rounded-md "
                          />
                        </td>
                        <td className="px-6 py-4">{vinyl.newPrice}</td>
                        <td className="px-6 py-4">
                          {/* <a
                            href="#"
                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                          >
                            Edit
                          </a> */}
                          <Link
                            to={`/dashboard/edit-vinyl/${vinyl._id}`}
                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                          >
                            Edit
                          </Link>
                        </td>

                        <td className="px-6 py-4">
                          <a
                            onClick={() => handleDeleteProduct(vinyl._id)}
                            // href="#"
                            className="font-medium cursor-pointer text-red-600 hover:underline"
                          >
                            Delete
                          </a>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ControlProducts
