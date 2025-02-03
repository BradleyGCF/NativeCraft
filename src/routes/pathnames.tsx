// import { AuthPaths } from './auth.routes'
// import { UserPaths } from './user.routes'

const UserPaths = {
  profile: '/profile',
}

const AuthPaths = {
  logIn: '/log-in',
  signUp: '/sign-up',
}

// Declaración de rutas
export const Pathnames = {
  home: '/',
  auth: AuthPaths,
  user: UserPaths,
} as const
