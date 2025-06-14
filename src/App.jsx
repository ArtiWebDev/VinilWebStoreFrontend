import './App.css'
import { Outlet } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import { AuthProvide } from './context/AuthContext'

function App() {
  return (
    <>
      <AuthProvide>
        <nav>
          <NavBar />
        </nav>
        <main className="min-h-screen max-w-screen-2xl msx-auto px-4 py-6 font-main bg-gray-200   ">
          <Outlet />
        </main>

        <footer>
          <Footer />
        </footer>
      </AuthProvide>
    </>
  )
}

export default App
