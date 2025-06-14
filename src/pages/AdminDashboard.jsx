import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import getBackendUrl from '../utils/getBackendUrl'

import Loader from '../components/Loader'

const AdminDashboard = () => {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState({})

  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${getBackendUrl()}/api/admin`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json',
          },
        })

        setData(response.data)
        setLoading(false)
      } catch (error) {
        console.error('Error:', error)
      }
    }

    fetchData()
  }, [])

  console.log('DATA', data)

  const totalProducts = data.totalVinyls
  const totalSales = data.totalSales
  const totalOrders = data.totalOrders
  // const totalSales = data.totalSales
  // const totalProducts = data.totalVinyls

  if (loading) return <Loader />
  return (
    <>
      <div className="flex flex-col md:flex-row gap-6">
        {/* // */}

        <div className="flex flex-col justify-center items-center my-6 bg-white shadow-sm border border-slate-200 hover:border-slate-300 hover:shadow-md rounded-lg transition-all w-66">
          <h5 class="mb-2  mt-4 text-slate-800 text-2xl font-semibold flex justify-center  ">
            Total Products in Store
          </h5>
          <p class="text-slate-900 text-6xl font-bold leading-normal">
            {totalProducts}
          </p>
        </div>

        {/* // */}

        <div className="flex flex-col justify-center items-center my-6 bg-white shadow-sm border border-slate-200 hover:border-slate-300 hover:shadow-md rounded-lg transition-all w-66">
          <h5 class="mb-2  mt-4 text-slate-800 text-2xl font-semibold flex justify-center  ">
            Total Sales
          </h5>
          <p class="text-slate-900 text-6xl font-bold leading-normal">
            {totalSales}
          </p>
        </div>

        {/* // */}

        <div className="flex flex-col justify-center items-center my-6 bg-white shadow-sm border border-slate-200 hover:border-slate-300 hover:shadow-md rounded-lg transition-all w-66">
          <h5 class="mb-2  mt-4 text-slate-800 text-2xl font-semibold flex justify-center  ">
            Total Orders
          </h5>
          <p class="text-slate-900 text-6xl font-bold leading-normal">
            {totalOrders}
          </p>
        </div>
      </div>
      <div className="flex flex-row justify-center gap-8 mt-8"></div>
    </>
  )
}

export default AdminDashboard
