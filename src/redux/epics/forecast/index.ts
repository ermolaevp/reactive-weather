import { ofType, combineEpics } from 'redux-observable'
import { map, mergeMap, debounce } from 'rxjs/operators'
import { from, timer } from 'rxjs'
import { DependenciesType } from '../../configure-store'
import { forecastUpdateAction } from '../../reducers/forecast/actions'
import {
  FORECAST_FETCH,
  IForecast,
  IForecastFetchAction,
} from '../../reducers/forecast/types'

export const forecastFetchEpic = (
  action$: any,
  _: any,
  { apiClient }: DependenciesType,
) =>
  action$.pipe(
    ofType(FORECAST_FETCH),
    debounce(() => timer(300)), // anti-DDoS
    mergeMap((payload: IForecastFetchAction) => {
      return from(apiClient.get('/api/data')).pipe(
        map(({ data }) => {
          const forecast = data.find(
            (d: IForecast) =>
              d.place_name === payload.place &&
              new Date(d.datetime).toDateString() ===
                new Date(payload.date).toDateString(),
          )
          return forecastUpdateAction(forecast)
        }),
      )
    }),
  )

export default combineEpics(forecastFetchEpic)
