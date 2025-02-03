import { Loader } from '@/modules/core/icons'
import { Suspense, lazy } from 'react'
import { Route, Routes as RouterRoutes } from 'react-router-dom'
import { ErrorBoundary } from 'react-error-boundary'
import { Routes } from '.'
import AppLayout from '@/layout/App.layout'
import AuthLayout from '@/layout/Auth.layout'
import ErrorPage from '@/screens/errorPage'
import logError from '@/logging'

const Home = lazy(() => import('@/screens/home'))
// Auth
const LogIn = lazy(() => import('@/screens/auth/logIn'))
const SignUp = lazy(() => import('@/screens/auth/signUp'))
// User
const UserProfile = lazy(() => import('@/screens/user/profile'))
const NotFoundPage = lazy(() => import('@/screens/notFoundPage'))

// usar Routes de la siguiente manera: <Link to={Roues.home}>Home</Link>

export default function Navigator() {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorPage}
      onError={logError}
      onReset={(details) => {
        // Reset the state of your app so the error doesn't happen again
        console.log(details)
      }}
    >
      <Suspense
        fallback={
          <div className="grid w-full h-screen place-content-center">
            <Loader className="h-[1.5rem] w-[1.5rem]" />
          </div>
        }
      >
        <RouterRoutes>
          <Route element={<AuthLayout />}>
            <Route path={Routes.logIn} element={<LogIn />} />
            <Route path={Routes.signUp} element={<SignUp />} />
          </Route>
          <Route element={<AppLayout />}>
            <Route path={Routes.home} element={<Home />} />
            <Route path={Routes.user.profile} element={<UserProfile />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </RouterRoutes>
      </Suspense>
    </ErrorBoundary>
  )
}
