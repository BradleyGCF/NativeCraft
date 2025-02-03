// biome-ignore lint/suspicious/noConstEnum: <explanation>
export const enum $OrderBy {
  ASC = 'asc',
  DESC = 'desc',
}

export const $SessionStatus = {
  UNAUTHENTICATED: 'UNAUTHENTICATED',
  AUTHENTICATED: 'AUTHENTICATED',
  UNAUTHENTICATED_ERROR: 'UNAUTHENTICATED_ERROR',
  LOADING: 'LOADING',
} as const

export const $ResponseStatus = {
  SUCCESS: 'success',
  ERROR: 'error',
} as const

export const $QueryKey = {
  SESSION: 'session',
  user: 'user',
  users: 'users',
} as const

export const $LocalStorageKey = {
  SessionToken: 'SessionToken',
} as const

export const $CookieKey = {
  SESSION_TOKEN: 'session_token',
} as const
