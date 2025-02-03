import type { Session } from '@/types'
import type { AxiosResponse } from 'axios'

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export function formatLogIn(response: AxiosResponse<any, any>): Session {
  const data = response.data
  return {
    id: data.objectId,
    avatar: data.avatar || '',
    email: data.email,
    role: data.rol,
    username: data.username,
    sessionToken: data.sessionToken,
    fullName: data.fullName,
  }
}
