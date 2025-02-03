// import type { ReactElement } from "react"
import { BiError } from 'react-icons/bi'

export function ErrorMessage({ message }: { message: string }) {
  return (
    <div className="flex items-center justify-center mx-auto gap-1">
      <BiError className="text-red-500 size-10 text-lg" />
      <p className="text-lg">{message}</p>
    </div>
  )
}
