import { createSelector } from 'reselect'
import { UsersStateType } from './types'

type StateType = { users: UsersStateType }

export const usersSelector = (state: StateType) => state.users

export const userSelector = createSelector(
  usersSelector,
  users => (id: number) => users.find(u => u.id === id),
)
