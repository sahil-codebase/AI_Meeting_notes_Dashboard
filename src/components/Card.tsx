import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const Card = ({ children }: Props) => {
  return (
    <div className="border p-4 rounded shadow-sm bg-white transition duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer">
      {children}
    </div>
  )
}

export default Card
