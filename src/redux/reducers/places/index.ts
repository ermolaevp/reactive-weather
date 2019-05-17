import Immutable from 'immutable'
import { PlacesActionTypes, PLACES_SET } from './types'

export const initalState = Immutable.List<string>([])

export type PlacesStateType = typeof initalState

export default function(state = initalState, action: PlacesActionTypes) {
  if (action.type === PLACES_SET) {
    return state.clear().concat(action.payload)
  }
  return state
}
