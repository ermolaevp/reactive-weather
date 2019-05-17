import { ForecastStateType } from '.'

export const forecastSelector = (state: any): ForecastStateType =>
  state.forecast
