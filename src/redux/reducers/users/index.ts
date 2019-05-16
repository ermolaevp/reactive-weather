import Immutable from 'immutable'
import { UsersActionTypes, USERS_ADD, IUser, USERS_REMOVE } from './types'

export const initalState = Immutable.List<IUser>([])

export default function(state = initalState, action: UsersActionTypes) {
  if (action.type === USERS_ADD) {
    return state.push(action.payload)
  }
  if (action.type === USERS_REMOVE) {
    return state.delete(state.findIndex(u => u.id === action.payload))
  }
  return state
}
