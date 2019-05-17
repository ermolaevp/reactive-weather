import { assert } from 'chai'
import reducers from '..'
import { placesSetAction } from './actions'
import { placesSelector } from './selectors'

describe('Places reducer', () => {
  it('set places', () => {
    const state = reducers(undefined, placesSetAction(['city1', 'city2']))
    assert.equal(2, placesSelector(state).size)
  })
})
