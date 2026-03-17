import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAppDispatch } from '../redux/hooks'
import { login } from '../redux/slices/authSlice'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Eye, EyeOff, MailIcon } from 'lucide-react'

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleSignup = () => {
    const userData = { email, password }

    localStorage.setItem('user_credentials', JSON.stringify(userData))

    dispatch(login(email))
    navigate('/dashboard')
  }

  return (
    <div className="flex items-center justify-center h-screen bg-background">
      <div className="bg-card p-10 rounded-xl shadow-lg w-[400px] space-y-4">
        <h1 className="text-2xl text-center font-bold">Sign Up</h1>

        {/* Email */}
        <div className="relative">
          <Input
            type="email"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
            className="pr-10"
          />
          <MailIcon className="absolute right-3 top-2 h-5 w-5 text-muted-foreground" />
        </div>

        {/* Password */}
        <div className="relative">
          <Input
            type={showPassword ? 'text' : 'password'}
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
            className="pr-10"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-2"
          >
            {showPassword ? (
              <EyeOff className="h-5 w-5 text-muted-foreground" />
            ) : (
              <Eye className="h-5 w-5 text-muted-foreground" />
            )}
          </button>
        </div>

        {/* Button */}
        <Button
          onClick={handleSignup}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white transition duration-300"
        >
          Sign Up
        </Button>

        {/* Redirect */}
        <p className="text-sm text-center">
          Already have an account?
          <Link to="/" className="text-primary ml-1">
            Login
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Signup
