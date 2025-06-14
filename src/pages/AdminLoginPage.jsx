import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import getBackendUrl from '../utils/getBackendUrl'

const AdminLoginPage = () => {
  const [message, setMessage] = useState('')

  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    // console.log(data)

    try {
      const response = await axios.post(
        `${getBackendUrl()}/api/auth/admin`,
        data,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )

      const auth = response.data
      console.log(auth)

      if (auth.token) {
        localStorage.setItem('token', auth.token) // 'token' has the same name
        setTimeout(() => {
          localStorage.removeItem('token')
          alert('Admin token has been expired.')
          navigate('/')
        }, 3600 * 24000)
      }

      alert('Admin Login successful')
      navigate('/dashboard')
    } catch (error) {
      setMessage('Invalid email or password')
      console.error(error)
    }
    // try {
    //   const response = await axios.post(
    //     `${getBackendUrl()}/api/auth/admin`,
    //     data,
    //     {
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //     }
    //   )
    //   const auth = response.data
    //   console.log(auth)
    //   if (auth.token) {
    //     localStorage.setItem('token', auth.token)
    //     setTimeout(() => {
    //       localStorage.removeItem('token')
    //       alert('Token has been expired.')
    //       navigate('/')
    //     }, 3600 * 1000)
    //   }

    //   alert('Admin Login successful')
    //   navigate('/dashboard')
    // } catch (error) {
    //   setMessage('Invalid email or password')
    //   console.error(error)
    // }
  }

  return (
    <>
      <div className="h-screen flex justify-center items-center ">
        <div className="w-full max-w-sm mx-auto bg-neutral-200 shadow-lg rounded-lg px-6 pt-6 pb-6 mb-4">
          <div className="flex justify-center">
            <h2 className="text-2xl text-primary font-roboto font-semibold mb-4">
              Admin Dashboard
            </h2>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label
                className="block text-primary/80 text-lg   font-bold mb-2"
                htmlFor="username"
              >
                Admin login name
              </label>
              <input
                {...register('username', { required: true })}
                type="text"
                name="username"
                id="username"
                placeholder="Login name"
                className="shadow appearance-none border border-primary bg-yellow-50 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow"
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-primary/80 text-lg font-bold mb-2"
                htmlFor="password"
              >
                Admin password
              </label>
              <input
                {...register('password', { required: true })}
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="shadow appearance-none border border-primary bg-yellow-50 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow"
              />
            </div>

            {message && (
              <p className="text-red-800 text-base  mb-3">{message}</p>
            )}
            <div className="w-full">
              <button className="bg-primary/80 w-full hover:bg-primary text-white font-bold text-lg py-2 px-8 rounded focus:outline-none cursor-pointer">
                LOGIN
              </button>
            </div>
          </form>

          <p className="mt-5 text-center text-neutral-500 text-sm">
            Login: admin, Password: pass1234
          </p>
        </div>
      </div>
    </>
  )
}

export default AdminLoginPage
