// Aquí van las adaptadoras de los datos de la app
// Ejemplo:
import type UsersResponse from '@/mockData/users/getAllUsers.json'
import type { Session, User, UserRole } from '@/types'
import type UserResponse from '@/mockData/users/getUserById.json'

export const formatUsers = (users: typeof UsersResponse): User[] => {
  return users.user.map((user) => ({
    id: user.id,
    fullName: user.attributes.fullName,
    email: user.attributes.username,
    username: user.attributes.username,
    userType: user.attributes.user_type as UserRole,
  }))
}

export function formatUserSession(data: typeof UserResponse): Session {
  const { user } = data
  const attributes = user?.attributes
  return {
    id: user?.id,
    email: attributes?.email,
    username: attributes?.username,
    fullName: attributes?.fullName,
    sessionToken: attributes?.sessionToken,
    role: attributes?.user_type as UserRole,
  }
}
