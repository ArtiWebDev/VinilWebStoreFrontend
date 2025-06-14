import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { FaGoogle } from 'react-icons/fa'
import { useForm } from 'react-hook-form'
import { useAuth } from '../context/AuthContext'

const RegisterPage = () => {
  const [message, setMessage] = useState('')
  const navigate = useNavigate()

  const { registerUser, signInWithGoogle } = useAuth()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    try {
      await registerUser(data.email, data.password)
      alert('User registered successfully')
    } catch (error) {
      setMessage('Invalid E-Mail or Password')
      console.log(error)
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
          <h2 className="text-3xl font-bold mb-4">Register</h2>

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

            <div>
              <button className=" cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded focus:outline-none   transition-transform duration-600 ease-in-out">
                Register
              </button>
            </div>
          </form>

          <p className="align-baseline font-medium mt-4 text-sm">
            Have an account? Then
            <Link
              to="/login"
              className="text-blue-500 hover:font-semibold hover:text-sky-900 text-lg ml-2"
            >
              Login
            </Link>
          </p>

          {/* Google sign in */}
          <div className="mt-4">
            <button
              onClick={handleGoogleSignIn}
              className="cursor-pointer w-full flex flex-wrap gap-1 items-center justify-center bg-secondary hover:bg-slate-900 text-white font-bold py-2 px-4 rounded focus:outline-none"
            >
              <FaGoogle className="mr-2" />
              Sign up with Google
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default RegisterPage
