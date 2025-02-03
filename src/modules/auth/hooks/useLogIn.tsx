import { useState } from 'react'
import type { LogIn } from '../types'
import handleError from '@/errors'
import { logIn as logInService } from '../services'

function useLogIn() {
  const [loading, setLoading] = useState(false)

  const logIn = async ({ email, password }: LogIn) => {
    setLoading(true)

    try {
      const response = logInService({ email, password })

      return response
    } catch (error) {
      return handleError(error)
    } finally {
      setLoading(false)
    }
  }

  return {
    logIn,
    loading,
  }
}

export default useLogIn
