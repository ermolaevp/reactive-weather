import {
  USERS_ADD,
  IUser,
  IUsersAddAction,
  IUserRemoveAction,
  USERS_REMOVE,
} from './types'

export const usersAddAction = (payload: IUser): IUsersAddAction => ({
  type: USERS_ADD,
  payload,
})

export const usersRemoveAction = (payload: number): IUserRemoveAction => ({
  type: USERS_REMOVE,
  payload,
})
