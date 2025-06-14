import { GiHamburgerMenu } from 'react-icons/gi'
import { IoSearchSharp } from 'react-icons/io5'
import { FaRegCircleUser } from 'react-icons/fa6'
import { FaRegHeart } from 'react-icons/fa'
import { PiShoppingCartBold } from 'react-icons/pi'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import profileAvatar from '../assets/avatar.png'
import { useState } from 'react'
import { useAuth } from '../context/AuthContext'

import Logo from '../assets/logo.png'

const NavBar = () => {
  const [isAvatarMenuOpen, setIsAvatarMenuOpen] = useState(false)
  const cartItems = useSelector((state) => state.cart.cartItems)
  // console.log(cartItems)

  // const currentUser = false
  const { currentUser, logout } = useAuth()

  const handleLogOut = () => {
    logout()
  }

  const avatarMenu = [
    {
      menuItem: 'Dashboard',
      href: '/dashboard',
    },
    {
      menuItem: 'Orders',
      href: '/orders',
    },
    {
      menuItem: 'Shopping   Cart',
      href: '/cart',
    },
    {
      menuItem: 'Check Out',
      href: '/checkout',
    },
  ]

  return (
    <>
      <header className="max-w-screen-2xl px-8 py-4 font-main bg-gray-600  ">
        <nav className=" flex justify-between items-center  ">
          {/* linke Seite */}
          <div className="flex items-center gap-4 md:gap-14    ">
            {/* <Link to="/">
              <GiHamburgerMenu className="size-8" />
            </Link> */}

            <Link to="/">
              <img src={Logo} alt="" className="w-18" />
            </Link>

            {/* <div className="relative sm:w-72 w-48 space-x-2">
              <IoSearchSharp className="size-6 absolute inline-block left-0.4 inset-y-1" />
              <input
                type="text"
                placeholder="Search"
                className="bg-slate-300 w-full py-1 px-6 nmd:px-8 rounded-md focus:outline-none"
              />
            </div> */}
          </div>

          {/* rechte Seite */}

          <div className="flex items-center md:space-x-3 space-x-2">
            <div>
              {currentUser ? (
                <>
                  <button
                    onClick={() => setIsAvatarMenuOpen(!isAvatarMenuOpen)}
                    className=""
                  >
                    <img
                      className="size-10  cursor-pointer rounded-full border-2 border-blue-950"
                      src={profileAvatar}
                      alt="avatar"
                    />
                  </button>

                  {/* DROPDOWN AVATAR MENU */}

                  {isAvatarMenuOpen && (
                    <div className="absolute right-34  bg-slate-300 mt-4 shadow-lg rounded-md z-100">
                      <ul className="py-4">
                        {avatarMenu.map((item, index) => (
                          <li
                            key={index}
                            onClick={() => setIsAvatarMenuOpen(false)}
                          >
                            <Link
                              to={item.href}
                              className="block px-4 py-2 text:sm text-xl font-medium hover:bg-slate-400 transition duration-400 ease-in-out"
                            >
                              {item.menuItem}
                            </Link>
                          </li>
                        ))}

                        <li>
                          <button
                            onClick={handleLogOut}
                            className="block w-full text-left px-4 py-2 text:sm text-xl font-medium hover:bg-slate-400 transition duration-400 ease-in-out"
                          >
                            Logout
                          </button>
                        </li>
                      </ul>
                    </div>
                  )}
                </>
              ) : (
                //  {loggedUser ? 'ring-2 ring-red-500' : ''}
                <Link to="/login">
                  <FaRegCircleUser className="size-8" />
                </Link>
              )}
            </div>

            <button className="hidden sm:block">
              <FaRegHeart className="size-8" />
            </button>

            <Link
              to="/cart"
              className=" bg-primary p-1 sm:px-6 flex items-center gap-4 rounded-md text-white hover:bg-primaryHover transition duration-600 ease-in-out"
            >
              <PiShoppingCartBold className="size-6 " />

              {cartItems.length > 0 ? (
                <span className="text-2xl font-semibold sm:ml-1">
                  {cartItems.length}
                </span>
              ) : (
                <span className="text-2xl font-semibold sm:ml-1">0</span>
              )}
            </Link>
          </div>
        </nav>
      </header>
    </>
  )
}

export default NavBar
