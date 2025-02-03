import logError from '@/logging'
import AuthError from '@/modules/auth/components/authError'
import LogInForm from '@/modules/auth/components/form/LogInForm'
import { ErrorBoundary } from 'react-error-boundary'

export function LogIn() {
  return (
    <ErrorBoundary FallbackComponent={AuthError} onError={logError}>
      <LogInForm />
    </ErrorBoundary>
  )
}
