import { assert } from 'chai'
import reducers from '..'
import { forecastUpdateAction } from './actions'
import { forecastSelector } from './selectors'

const forecast = {
  station_id: 0,
  place_name: 'city1',
  latitude: 0,
  longitude: 0,
  datetime: '',
  temperature_max: '',
  temperature_min: '',
  precipitation_probability: '',
  precipitation_mm: '',
}

describe('Forecast reducer', () => {
  it('update', () => {
    const state = reducers(undefined, forecastUpdateAction(forecast))
    assert.equal('city1', forecastSelector(state).place_name)
  })
})
