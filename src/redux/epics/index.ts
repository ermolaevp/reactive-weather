import { combineEpics } from 'redux-observable'
import placesEpics from './places'
import forecastEpics from './forecast'

export const rootEpic = combineEpics(placesEpics, forecastEpics)

export default rootEpic
