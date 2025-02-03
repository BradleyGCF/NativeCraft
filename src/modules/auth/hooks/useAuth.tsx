import { Routes } from '@/routes'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { $SessionStatus, $UserRole } from '@/modules/auth/enum'
import useSession from '@/modules/core/hooks/useSession'
// import { $UserRole } from '@/modules/core/enum'

const useAuth = ({ redirectTo, redirect }: { redirectTo?: string; redirect?: boolean } = {}) => {
  const { user, status } = useSession()
  const navigate = useNavigate()
  // const param = useParams()
  const routes = {
    [$UserRole.USER]: {
      redirectTo: Routes.user.profile,
      allowed: [Routes.user.profile as string],
    },
    [$UserRole.ADMIN]: {
      redirectTo: Routes.admin.dashboard,
      allowed: [Routes.admin.dashboard as string],
    },
  } as const

  useEffect(() => {
    if (status === $SessionStatus.LOADING) return

    const redirectOptions = {
      path: redirectTo || Routes.logIn,
      redirect,
    }

    if (user?.role && !routes[user.role].allowed.includes(globalThis.window.location.pathname)) {
      redirectOptions.path = routes[user?.role].redirectTo
      redirectOptions.redirect = true
    }

    if (!user?.sessionToken) {
      redirectOptions.path = Routes.logIn
      redirectOptions.redirect = true
    }

    if (redirectOptions.redirect) {
      navigate(redirectOptions.path, { replace: true })
    }
  }, [user?.sessionToken, status, redirectTo, redirect, user, navigate, routes])
}

export default useAuth
