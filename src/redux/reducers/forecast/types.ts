export const FORECAST_FETCH = 'FORECAST_FETCH'
export const FORECAST_UPDATE = 'FORECAST_UPDATE'

export interface IForecast {
  station_id: number
  place_name: string
  latitude: number
  longitude: number
  datetime: string
  temperature_max: string
  temperature_min: string
  precipitation_probability: string
  precipitation_mm: string
}

export interface IForecastFetchAction {
  type: typeof FORECAST_FETCH
  place: string
  date: string
}

export interface IForecastUpdateAction {
  type: typeof FORECAST_UPDATE
  payload: IForecast
}

export type ForecastActionTypes = IForecastFetchAction | IForecastUpdateAction
