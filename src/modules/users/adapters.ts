// Aquí van las adaptadoras de los datos de la app
// Ejemplo:
import type GetAllUsersResponse from '@/mockData/users/getAllUsers.json'
import type UserResponse from '@/mockData/users/getUserById.json'
import type { Session, UserRole } from '@/types'

export function formatUsers(users: typeof GetAllUsersResponse) {
  return users.map((user) => {
    return {
      id: String(user.id),
      fullName: user.name,
      username: user.username,
      email: user.email,
      role: 'user',
    }
  })
}

export function formatUserSession(data: typeof UserResponse): Session {
  const { user } = data
  return {
    id: user?.id,
    avatar: user?.avatar,
    email: user?.email,
    username: user?.username,
    fullName: user?.fullName,
    sessionToken: user?.sessionToken,
    role: user?.userRole as UserRole,
  }
}
