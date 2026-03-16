import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAppDispatch } from '../redux/hooks'
import { login } from '../redux/slices/authSlice'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleLogin = () => {
    const storedUser = localStorage.getItem('user_credentials')

    if (!storedUser) {
      setError('No account found. Please sign up.')
      return
    }

    const credentials = JSON.parse(storedUser)

    if (email === credentials.email && password === credentials.password) {
      dispatch(login(email))

      navigate('/dashboard')
    } else {
      setError('Invalid email or password')
    }
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow w-80">
        <h1 className="text-xl font-bold mb-4">Login</h1>

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

        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

        <button
          onClick={handleLogin}
          className="bg-blue-500 text-white w-full py-2 rounded"
        >
          Login
        </button>

        <p className="text-sm mt-3 text-center">
          Don't have an account?
          <Link to="/signup" className="text-blue-500 ml-1">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Login
