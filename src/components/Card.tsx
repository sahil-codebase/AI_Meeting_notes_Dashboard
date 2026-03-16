import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const Card = ({ children }: Props) => {
  return <div className="border p-4 rounded shadow bg-white">{children}</div>
}

export default Card
