// import { Link } from 'react-router-dom'
// import { useAppDispatch } from '../redux/hooks'
// import { logout } from '../redux/slices/authSlice'

// const Sidebar = () => {
//   const dispatch = useAppDispatch()

//   return (
//     <div className="w-80 h-screen bg-gray-900 text-white p-6">
//       <h2 className="text-xl font-bold mb-6 ml-6"> AI Notes </h2>

//       <nav className="flex flex-col gap-9 ml-6 mt-10">
//         <Link to="/dashboard">Dashboard</Link>
//         <Link to="/upload">Upload Transcript</Link>
//         <Link to="/history">Notes History</Link>
//         <Link to="/settings">Settings</Link>
//       </nav>

//       <button
//         onClick={() => dispatch(logout())}
//         className="mt-9 ml-6 bg-red-500 hover:bg-red-700 px-8  py-2 rounded"
//       >
//         Logout
//       </button>
//     </div>
//   )
// }

// export default Sidebar

import { Link, useLocation } from 'react-router-dom'
import { useAppDispatch } from '../redux/hooks'
import { logout } from '../redux/slices/authSlice'
import {
  LayoutDashboard,
  Upload,
  History,
  Settings,
  LogOut
} from 'lucide-react'
import { Button } from '@/components/ui/button'

const Sidebar = () => {
  const dispatch = useAppDispatch()
  const location = useLocation()

  const menu = [
    { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
    { name: 'Upload Transcript', path: '/upload', icon: Upload },
    { name: 'Notes History', path: '/history', icon: History },
    { name: 'Settings', path: '/settings', icon: Settings }
  ]

  return (
    <div className="w-72 h-screen bg-card border bg-gray-800 flex flex-col justify-between p-5">
      {/* Top */}
      <div>
        <h2 className="text-xl text-white font-bold mb-8">AI Notes</h2>

        <nav className="flex flex-col gap-2">
          {menu.map((item) => {
            const Icon = item.icon
            const isActive = location.pathname === item.path

            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 text-white px-4 py-2 rounded-lg transition 
                  ${
                    isActive
                      ? 'bg-primary text-primary-foreground'
                      : 'hover:bg-muted'
                  }`}
              >
                <Icon className="h-5 w-5" />
                {item.name}
              </Link>
            )
          })}
        </nav>
      </div>

      {/* Bottom */}
      <Button
        onClick={() => dispatch(logout())}
        variant="destructive"
        className="w-full flex font-bold bg-red-400 hover:bg-red-500 text-xl gap-2"
      >
        <LogOut className="h-3  w-4" />
        Logout
      </Button>
    </div>
  )
}

export default Sidebar
