import { ofType, combineEpics } from 'redux-observable'
import { map, mergeMap, debounce } from 'rxjs/operators'
import { from, timer } from 'rxjs'
import { DependenciesType } from '../../configure-store'
import { PLACES_FETCH } from '../../reducers/places/types'
import { placesSetAction } from '../../reducers/places/actions'

export const placesFetchEpic = (
  action$: any,
  _: any,
  { apiClient }: DependenciesType,
) =>
  action$.pipe(
    ofType(PLACES_FETCH),
    debounce(() => timer(300)), // anti-DDoS
    mergeMap(() => {
      return from(apiClient.get('/api/places')).pipe(
        map(({ data }) => {
          return placesSetAction(data)
        }),
      )
    }),
  )

export default combineEpics(placesFetchEpic)
