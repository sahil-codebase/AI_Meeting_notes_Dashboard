import { Navigate } from 'react-router-dom'
import { useAppSelector } from '../redux/hooks'
import type { ReactNode } from 'react'

interface ProtectedRouteProps {
  children: ReactNode
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const user = useAppSelector((state) => state.auth.user)

  if (!user) {
    return <Navigate to="/" />
  }

  return <>{children}</>
}

export default ProtectedRoute
