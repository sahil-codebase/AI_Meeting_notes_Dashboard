import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../redux/hooks'
import { login } from '../redux/slices/authSlice'

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleSignup = () => {
    const userData = {
      email,
      password
    }

    // Save credentials permanently
    localStorage.setItem('user_credentials', JSON.stringify(userData))

    // Create login session
    dispatch(login(email))

    navigate('/dashboard')
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="border p-6 rounded w-80">
        <h1 className="text-xl font-bold mb-4">Sign Up</h1>

        <input
          className="border p-2 w-full mb-3"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="border p-2 w-full mb-3"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleSignup}
          className="bg-blue-500 text-white w-full py-2 rounded"
        >
          Sign Up
        </button>
      </div>
    </div>
  )
}

export default Signup
