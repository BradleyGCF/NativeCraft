import { api, rawApi } from '@/api'
import { formatLogIn } from '@/modules/auth/adapters'
import type { LogIn, SignUp } from '@/modules/auth/types'
import { $ResponseStatus } from '@/modules/core/enum'
import { formatUserSession } from '@/modules/users/adapters'
import axios from 'axios'
import { captureServerError } from '../utils'

export const Services = {
  auth: {
    signUp: 'createUser',
    logIn: 'logIn',
    session: 'getSession',
  },
} as const

export const signUp = async ({ email, password, fullName }: SignUp) => {
  try {
    const response = await axios.post(Services.auth.signUp, {
      email,
      password,
      fullName,
    })

    const [status, message] = captureServerError(response)

    if (status === $ResponseStatus.ERROR) {
      return {
        success: false,
        message,
      }
    }

    return {
      success: true,
      message: 'Registro exitoso',
    }
  } catch (_) {
    return {
      success: false,
      message: 'Ha ocurrido un error',
    }
  }
}

export const logIn = async ({ email, password }: LogIn) => {
  try {
    const response = await rawApi.post(Services.auth.logIn, {
      email,
      password,
    })

    const [status, message] = captureServerError(response)

    if (status === $ResponseStatus.ERROR) {
      return {
        success: false,
        message,
      }
    }

    return {
      success: true,
      data: formatLogIn(response),
    }
  } catch (error) {
    console.error(error)
    return {
      success: false,
      message: 'Ha ocurrido un error',
    }
  }
}

export const getSession = async () => {
  try {
    const response = await api.post(Services.auth.session)

    const [status, message] = captureServerError(response)

    if (status === $ResponseStatus.ERROR) {
      return {
        success: false,
        message,
      }
    }

    return {
      success: true,
      data: formatUserSession(response.data),
      // optional, if you want to show a message
      // message: response.data.message,
    }
  } catch (_) {
    return {
      success: false,
      message: 'Ha ocurrido un error al obtener el usuario',
    }
  }
}
