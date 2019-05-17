import $$observable from 'symbol-observable'
import { TestScheduler } from 'rxjs/testing'
import { cleanup } from 'react-testing-library'
import configureStore from '../../configure-store'
import { assert } from 'chai'
import { forecastFetchEpic } from '.'
import {
  forecastFetchAction,
  forecastUpdateAction,
} from '../../reducers/forecast/actions'

const store = configureStore()
const state$ = (store as any)[$$observable]()

const forecast = {
  station_id: 0,
  place_name: 'city1',
  latitude: 0,
  longitude: 0,
  datetime: '2014-08-09',
  temperature_max: '',
  temperature_min: '',
  precipitation_probability: '',
  precipitation_mm: '',
}

afterEach(cleanup)

describe('Forecast epics', () => {
  it('fetch and set', () => {
    const testScheduler = new TestScheduler(assert.deepEqual)

    testScheduler.run(({ hot, cold, expectObservable }) => {
      const action$ = hot('-a', {
        a: forecastFetchAction('city1', '2014-08-09'),
      })

      const dependencies: any = {
        apiClient: {
          get: () =>
            cold('--a', {
              a: { data: [forecast] },
            }),
        },
      }

      const output$ = forecastFetchEpic(action$, state$, dependencies)

      expectObservable(output$).toBe('300ms ---a', {
        a: forecastUpdateAction(forecast),
      })
    })
  })
})
