import { combineReducers } from 'redux'
import forecast from './forecast'
import places from './places'

const reducers = combineReducers({
  forecast,
  places,
})

export default reducers
