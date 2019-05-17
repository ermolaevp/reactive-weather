import {
  IPlacesFetchAction,
  PLACES_FETCH,
  PlacesType,
  IPlacesSetAction,
  PLACES_SET,
} from './types'

export const placesFetchAction = (): IPlacesFetchAction => ({
  type: PLACES_FETCH,
})

export const placesSetAction = (payload: PlacesType): IPlacesSetAction => ({
  type: PLACES_SET,
  payload,
})
