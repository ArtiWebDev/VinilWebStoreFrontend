import { RiAdminFill } from 'react-icons/ri'
import { RiAddBoxFill } from 'react-icons/ri'
import { FaRegEdit } from 'react-icons/fa'
import { Link, Outlet, useNavigate } from 'react-router-dom'

const AdminLayout = () => {
  return (
    <section className="flex md:bg-neutral-200 min-h-screen overflow-hidden">
      <aside className=" flex flex-col justify-start  bg-slate-300">
        <a
          href="/dashboard"
          className="flex justify-center items-center w-full  h-10  bg-slate-600 hover:bg-slate-500 focus:bg-slate-500"
        >
          <div className="m-4">
            <RiAdminFill size={20} style={{ fill: 'white' }} />
          </div>
        </a>

        <div className="flex flex-col justify-start space-y-4">
          <div className="flex-grow flex flex-col justify-start text-slate-700 mt-4">
            <Link
              to="/dashboard/add-vinyl"
              className="flex flex-col items-center justify-center py-3 hover:text-gray-800 hover:bg-slate-400 focus:text-slate-900 focus:bg-slate-400"
            >
              <span className="px-4 font-bold uppercase">Add Product</span>
              <RiAddBoxFill size={50} style={{ fill: '#35530e' }} />
            </Link>
          </div>
          <div className="flex-grow flex flex-col justify-start text-slate-700 mt-4">
            <Link
              to="/dashboard/control-vinyls"
              className="flex flex-col  items-center justify-center py-3 hover:text-gray-800 hover:bg-slate-400 focus:text-slate-900 focus:bg-slate-400"
            >
              <span className="px-4 font-bold uppercase">Products Manager</span>
              <FaRegEdit size={44} style={{ fill: '#d08700' }} />
            </Link>
          </div>
        </div>
      </aside>

      {/* <aside className=" flex flex-col justify-center  bg-slate-300">
        <a  
          href="/"
          className="flex justify-center items-center w-full  h-10  bg-slate-600 hover:bg-slate-500 focus:bg-slate-500"
        >
          <div className="m-4">
            <RiAdminFill size={20} style={{ fill: 'white' }} />
          </div>
        </a>

        <div className="flex-grow flex flex-col justify-start space-y-4 text-slate-700 mt-4">
          <Link
            to="/dashboard/add-vinyl"
            className="flex flex-col  items-center justify-center py-3 hover:text-gray-800 hover:bg-slate-400 focus:text-slate-700 focus:bg-slate-400"
          >
            <span className="px-4 font-semibold">Add Product</span>
            <RiAddBoxFill size={50} style={{ fill: '#35530e' }} />
          </Link>
        </div>

        <Link
          to="/dashboard/add-vinyl"
          className="flex flex-col  items-center justify-center py-3 hover:text-gray-800 hover:bg-slate-400 focus:text-slate-700 focus:bg-slate-400"
        >
          <span className="px-4 font-semibold">Add Product</span>
          <RiAddBoxFill size={50} style={{ fill: '#35530e' }} />
        </Link>
      </aside> */}

      <main className="mt-6 ml-46  ">
        <Outlet />
      </main>
    </section>
  )
}

export default AdminLayout
