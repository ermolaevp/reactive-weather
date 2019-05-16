import { assert } from 'chai'
import reducers from '..'
import { usersAddAction, usersRemoveAction } from './actions'
import { userSelector } from './selectors'

const user = { id: 42, name: 'Matt' }

describe('Users reducer', () => {
  it('add user', () => {
    const state = reducers(undefined, usersAddAction(user))
    assert.deepEqual(user, userSelector(state)(user.id))
    assert.equal(1, state.users.size)
  })
  it('remove user', () => {
    const state = reducers(undefined, usersAddAction(user))
    const nextState = reducers(state, usersRemoveAction(42))
    assert.isUndefined(userSelector(nextState)(user.id))
    assert.equal(0, nextState.users.size)
  })
})
