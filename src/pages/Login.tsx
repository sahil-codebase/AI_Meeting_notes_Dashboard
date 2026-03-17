// import { useState } from 'react'
// import { useNavigate, Link } from 'react-router-dom'
// import { useAppDispatch } from '../redux/hooks'
// import { login } from '../redux/slices/authSlice'
// import {
//   InputGroup,
//   InputGroupAddon,
//   InputGroupInput
// } from '@/components/ui/input-group'
// import {
//   CheckIcon,
//   CreditCardIcon,
//   InfoIcon,
//   MailIcon,
//   SearchIcon,
//   StarIcon,
//   Eye,
//   EyeOff
// } from 'lucide-react'

// const Login = () => {
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
//   const [error, setError] = useState('')
//   const [showPassword, setShowPassword] = useState(false)

//   const dispatch = useAppDispatch()
//   const navigate = useNavigate()

//   const handleLogin = () => {
//     const storedUser = localStorage.getItem('user_credentials')

//     if (!storedUser) {
//       setError('No account found. Please sign up.')
//       return
//     }

//     const credentials = JSON.parse(storedUser)

//     if (email === credentials.email && password === credentials.password) {
//       dispatch(login(email))

//       navigate('/dashboard')
//     } else {
//       setError('Invalid email or password')
//     }
//   }

//   return (
//     <div className="flex items-center justify-center h-screen bg-gray-100">
//       <div className="bg-white p-12 rounded shadow-lg w-100 ">
//         <h1 className="text-3xl text-center font-bold font-serif mb-5">
//           Login
//         </h1>

//         <InputGroup>
//           <InputGroupInput
//             type="email"
//             placeholder="Enter your email"
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <InputGroupAddon>
//             <MailIcon />
//           </InputGroupAddon>
//         </InputGroup>

//         {/* <input
//           className="border p-2 w-full mb-3"
//           placeholder="Email"
//           onChange={(e) => setEmail(e.target.value)}
//         /> */}

//         {/* <input
//           type="password"
//           className="border p-2 w-full mb-3"
//           placeholder="Password"
//           onChange={(e) => setPassword(e.target.value)}
//         /> */}

//         <InputGroup>
//           <InputGroupInput
//             type="password"
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <InputGroupAddon>
//             <Eye />
//           </InputGroupAddon>
//         </InputGroup>

//         {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

//         <button
//           onClick={handleLogin}
//           className="bg-blue-500 hover:bg-blue-700 text-white w-full py-2 rounded"
//         >
//           Login
//         </button>

//         <p className="text-sm mt-3 text-center">
//           Don't have an account?
//           <Link to="/signup" className="text-blue-500 ml-1">
//             Sign up
//           </Link>
//         </p>
//       </div>
//     </div>
//   )
// }

// export default Login
import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAppDispatch } from '../redux/hooks'
import { login } from '../redux/slices/authSlice'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Eye, EyeOff, MailIcon } from 'lucide-react'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [showPassword, setShowPassword] = useState(false)

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
    <div className="flex items-center justify-center h-screen bg-background">
      <div className="bg-card p-10 rounded-xl shadow-lg w-[400px] space-y-4">
        <h1 className="text-2xl text-center font-bold">Login</h1>

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

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <Button
          onClick={handleLogin}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white transition duration-300"
        >
          Login
        </Button>

        <p className="text-sm text-center">
          Don’t have an account?
          <Link to="/signup" className="text-primary ml-1">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Login
