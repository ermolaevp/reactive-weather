import $$observable from 'symbol-observable'
import { TestScheduler } from 'rxjs/testing'
import { cleanup } from 'react-testing-library'
import configureStore from '../../configure-store'
import { assert } from 'chai'
import {
  placesFetchAction,
  placesSetAction,
} from '../../reducers/places/actions'
import { placesFetchEpic } from '.'

const store = configureStore()
const state$ = (store as any)[$$observable]()

afterEach(cleanup)

describe('Places epics', () => {
  it('fetch and set', () => {
    const testScheduler = new TestScheduler(assert.deepEqual)

    testScheduler.run(({ hot, cold, expectObservable }) => {
      const action$ = hot('-a', {
        a: placesFetchAction(),
      })

      const dependencies: any = {
        apiClient: {
          get: () =>
            cold('--a', {
              a: { data: ['city1', 'city2'] },
            }),
        },
      }

      const output$ = placesFetchEpic(action$, state$, dependencies)

      expectObservable(output$).toBe('300ms ---a', {
        a: placesSetAction(['city1', 'city2']),
      })
    })
  })
})
