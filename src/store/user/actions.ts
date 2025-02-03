import type { ZustandGet, ZustandSet } from '..'
import type { State, Actions } from '.'

// Aquí van las acciones del store si éste es muy grande
// quitar el '_' si se utiliza get
export const setUser = (user: State['user']) => async (set: ZustandSet<State, Actions>, _get?: ZustandGet<State, Actions>) => {
  set(() => ({ user }))
}
