import Immutable from 'immutable'
import { IForecast, ForecastActionTypes, FORECAST_UPDATE } from './types'

const forecastFactory = Immutable.Record<IForecast>(
  {
    station_id: 0,
    place_name: '',
    latitude: 0,
    longitude: 0,
    datetime: '',
    temperature_max: '',
    temperature_min: '',
    precipitation_probability: '',
    precipitation_mm: '',
  },
  'Forecast',
)

export const defaultForecast = forecastFactory()

export type ForecastStateType = typeof defaultForecast

export default function(state = defaultForecast, action: ForecastActionTypes) {
  if (action.type === FORECAST_UPDATE) {
    return state.merge(action.payload)
  }
  return state
}
