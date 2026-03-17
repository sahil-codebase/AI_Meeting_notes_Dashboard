import { Link } from 'react-router-dom'
import { useAppDispatch } from '../redux/hooks'
import { logout } from '../redux/slices/authSlice'

const Sidebar = () => {
  const dispatch = useAppDispatch()

  return (
    <div className="w-80 h-screen bg-gray-900 text-white p-6">
      <h2 className="text-xl font-bold mb-6 ml-6"> AI Notes </h2>

      <nav className="flex flex-col gap-9 ml-6 mt-10">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/upload">Upload Transcript</Link>
        <Link to="/history">Notes History</Link>
        <Link to="/settings">Settings</Link>
      </nav>

      <button
        onClick={() => dispatch(logout())}
        className="mt-9 ml-6 bg-red-500 hover:bg-red-700 px-8  py-2 rounded"
      >
        Logout
      </button>
    </div>
  )
}

export default Sidebar
