import { Link } from 'react-router-dom'
import { useAppDispatch } from '../redux/hooks'
import { logout } from '../redux/slices/authSlice'

const Sidebar = () => {
  const dispatch = useAppDispatch()

  return (
    <div className="w-60 h-screen bg-gray-900 text-white p-6">
      <h2 className="text-xl font-bold mb-6"> AI Notes </h2>

      <nav className="flex flex-col gap-3">
        <Link to="/dashboard"> Dashboard</Link>
        <Link to="/upload">Upload Transcript</Link>
        <Link to="/history">Notes History</Link>
      </nav>

      <button
        onClick={() => dispatch(logout())}
        className="mt-6 bg-red-500 px-3 py-2 rounded"
      >
        Logout
      </button>
    </div>
  )
}

export default Sidebar
