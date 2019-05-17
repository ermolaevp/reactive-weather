export const PLACES_FETCH = 'PLACES_FETCH'
export const PLACES_SET = 'PLACES_SET'

export type PlacesType = string[]

export interface IPlacesFetchAction {
  type: typeof PLACES_FETCH
}

export interface IPlacesSetAction {
  type: typeof PLACES_SET
  payload: PlacesType
}

export type PlacesActionTypes = IPlacesFetchAction | IPlacesSetAction
