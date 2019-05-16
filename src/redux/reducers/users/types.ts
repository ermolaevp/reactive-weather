import { initalState } from '.'

export const USERS_ADD = 'USERS_ADD'
export const USERS_REMOVE = 'USERS_REMOVE'

export interface IUser {
  id?: number
  name: string
}

export interface IUsersAddAction {
  type: typeof USERS_ADD
  payload: IUser
}

export interface IUserRemoveAction {
  type: typeof USERS_REMOVE
  payload: number
}

export type UsersStateType = typeof initalState
export type UsersActionTypes = IUsersAddAction | IUserRemoveAction
