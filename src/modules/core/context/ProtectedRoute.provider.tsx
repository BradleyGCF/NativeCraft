import { Loader } from '@/modules/core/icons/loader'
import { useSession } from '@/store'
import type { UserRole } from '@/types'
import type { PropsWithChildren } from 'react'
import AccessDenied from '../components/accessDenied'

type ProtectedRouteProps = PropsWithChildren & {
  redirect?: string
  rolesAllowed?: UserRole[]
}

export const ProtectedRoute = ({ children, rolesAllowed }: ProtectedRouteProps) => {
  const { session, isLoading } = useSession()

  if (isLoading)
    return (
      <div className="w-screen h-screen grid place-items-center">
        <Loader />
      </div>
    )

  if (!session?.sessionToken || !rolesAllowed?.includes(session?.role)) {
    return <AccessDenied />
  }

  return children
}
