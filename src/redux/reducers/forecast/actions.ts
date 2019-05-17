import {
  IForecastFetchAction,
  FORECAST_FETCH,
  IForecast,
  IForecastUpdateAction,
  FORECAST_UPDATE,
} from './types'

export const forecastFetchAction = (
  place: string,
  date: string,
): IForecastFetchAction => ({
  type: FORECAST_FETCH,
  place,
  date,
})

export const forecastUpdateAction = (
  payload: IForecast,
): IForecastUpdateAction => ({
  type: FORECAST_UPDATE,
  payload,
})
