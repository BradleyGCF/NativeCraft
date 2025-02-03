import { Services } from '@/services'
import Moralis from 'moralis-v1'
import type { LogIn, SignUp } from '../types'

export const signUp = async ({ email, password, fullName, username }: SignUp) => {
  try {
    const response = await Moralis.Cloud.run(Services.auth.signUp, {
      objectData: {
        email,
        password,
        username,
        fullName,
      },
    })

    if (response.status === 'error') {
      return {
        error: 'Ha ocurrido un error',
      }
    }

    return {
      success: 'Registro exitoso',
    }
  } catch (error) {
    console.error(error)
    return {
      error: 'Ha ocurrido un error',
    }
  }
}

export const logIn = async ({ email, password }: LogIn) => {
  try {
    const response = await Moralis.User.logIn(email, password)

    if (!response.id) {
      return {
        error: 'Ha ocurrido un error',
      }
    }

    return {
      success: 'Registro exitoso',
    }
  } catch (error) {
    console.error(error)
    return {
      error: 'Ha ocurrido un error',
    }
  }
}
