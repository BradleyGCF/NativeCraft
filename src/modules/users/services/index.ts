import { $ResponseStatus } from '@/modules/core/enum'
import type { OrderBy, Pagination, Search } from '@/types'
import axios from 'axios'
import { formatUserSession, formatUsers } from '../adapters'

const Services = {
  users: {
    update: 'updateUser',
    getUserById: 'getUserById',
    getAll: 'https://jsonplaceholder.typicode.com/users',
    getSession: 'https://jsonplaceholder.typicode.com/users/1',
  },
} as const

export const getUserById = async ({ id }: { id: string } & OrderBy) => {
  try {
    const response = await axios.post(Services.users.getUserById, {
      userId: id,
    })

    if (response.data.status === $ResponseStatus.ERROR) {
      return {
        error: 'Ha ocurrido un error',
      }
    }

    const data = formatUserSession(response.data)

    return {
      data,
    }
  } catch (error) {
    console.error(error)
    return {
      error: 'Ha ocurrido un error',
    }
  }
}

export const getAllUsers = async ({ q, page }: Pagination & Search = {}) => {
  try {
    const response = await axios.get(Services.users.getAll, {
      params: {
        q,
        page,
      },
    })

    if (response.data.status === $ResponseStatus.ERROR) {
      throw new Error('Ha ocurrido un error')
    }

    const data = formatUsers(response.data)

    return {
      data,
    }
  } catch (error) {
    console.error(error)
    return {
      error: 'Ha ocurrido un error',
    }
  }
}
