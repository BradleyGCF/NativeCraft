export * from './pathnames'
import AppLayout from '@/layout/App.layout'
import AuthLayout from '@/layout/Auth.layout'
import { $UserRole } from '@/modules/auth/enum'
import { Loader } from '@/modules/core/icons'
import { NotFoundPage } from '@/screens/404'
import { LogIn } from '@/screens/auth/logIn'
import SignUp from '@/screens/auth/signUp'
import Home from '@/screens/home'
import Profile from '@/screens/user/profile'
import { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Pathnames } from './pathnames'

export const AppRouter = () => {
  return (
    <Suspense
      fallback={
        <div className="h-screen w-full grid place-content-center">
          <Loader />
        </div>
      }
    >
      <BrowserRouter>
        <Routes>
          {/* Auth routes */}
          <Route element={<AuthLayout />}>
            <Route path={Pathnames.auth.logIn} element={<LogIn />} />
            <Route path={Pathnames.auth.signUp} element={<SignUp />} />
          </Route>
          {/* Auth routes */}

          {/* Common routes */}
          <Route element={<AppLayout validate={false} />}>
            <Route path={Pathnames.home} element={<Home />} />
          </Route>
          {/* Common routes */}

          {/* User routes */}
          <Route element={<AppLayout rolesAllowed={[$UserRole.USER]} redirect={Pathnames.auth.logIn} validate />}>
            <Route path={Pathnames.user.profile} element={<Profile />} />
          </Route>
          {/* User routes */}

          {/* Not found */}
          <Route path="*" element={<NotFoundPage />} />
          {/* Not found */}
        </Routes>
      </BrowserRouter>
    </Suspense>
  )
}
