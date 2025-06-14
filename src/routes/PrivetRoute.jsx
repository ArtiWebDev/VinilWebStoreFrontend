import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const PrivetRoute = ({ children }) => {
  const { currentUser, loading } = useAuth()

  if (loading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <span className="loading loading-spinner loading-lg">Loading ....</span>
      </div>
    )
  }

  if (currentUser) {
    return children
  }

  return <Navigate to="/login" replace />
}

export default PrivetRoute
