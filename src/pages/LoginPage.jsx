import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { FaGoogle } from 'react-icons/fa'
import { useForm } from 'react-hook-form'
import { useAuth } from '../context/AuthContext'

const LoginPage = () => {
  const [message, setMessage] = useState('')

  const navigate = useNavigate()
  const { loginUser, signInWithGoogle } = useAuth()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    try {
      await loginUser(data.email, data.password)
      alert('Login successful!')
      navigate('/')
    } catch (error) {
      setMessage('Invalid email or password')
      console.error(error)
    }
  }

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle()
      alert('Login successful!')
      navigate('/')
    } catch (error) {
      alert('Google sign in failed!')
      console.error(error)
    }
  }

  return (
    <>
      <div className="h-[calc(100vh-120px)] flex justify-center items-center">
        <div className="w-full max-w-sm mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="text-3xl text-primary   flex justify-center font-bold mb-4">
            Login
          </h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                {...register('email', { required: true })}
                type="email"
                name="email"
                id="email"
                placeholder="Email Address"
                className="shadow font-roboto appearance-none border font-semibold  border-slate-600 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                {...register('password', { required: true })}
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="shadow appearance-none border border-slate-600 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow"
              />
            </div>

            {message && (
              <p className="text-red-800 text-base  mb-3">{message}</p>
            )}

            <div className="flex justify-center mt-6 ">
              <button className="w-full cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded focus:outline-none transition-transform duration-600 ease-in-out">
                Login
              </button>
            </div>
          </form>

          <p className="align-baseline font-medium mt-4 text-sm">
            Don't have an account? Then
            <Link
              to="/register"
              className="text-blue-500 hover:font-semibold hover:text-sky-900 text-sm ml-2"
            >
              Register
            </Link>
          </p>

          <p className="align-baseline font-medium text-sm mt-2">
            Are You Admin?
            <Link
              to="/admin"
              className="text-blue-500 hover:font-semibold hover:text-sky-900 text-sm ml-2"
            >
              Login to admin Dashboard
            </Link>
          </p>

          {/* Google sign in */}
          <div className="mt-4">
            <button
              onClick={handleGoogleSignIn}
              className="cursor-pointer w-full flex flex-wrap gap-1 items-center justify-center bg-secondary hover:bg-slate-900 text-white font-bold py-2 px-4 rounded focus:outline-none"
            >
              <FaGoogle className="mr-2" />
              Sign in with Google
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default LoginPage
