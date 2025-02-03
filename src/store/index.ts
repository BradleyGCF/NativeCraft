export * from './user'
export * from './session/index'

export type ZustandSet<State, Actions> = (
  partial:
    | (State & Actions)
    | Partial<State & Actions>
    | ((state: State & Actions) => (State & Actions) | Partial<State & Actions>),
  replace?: boolean | undefined
) => void

export type ZustandGet<State, Actions> = () => State & Actions
