import { compose, createStore, applyMiddleware } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import rootReducer from './reducers'
import rootEpic from './epics'
import { apiClient } from '../api/api-client'

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const dependencies = {
  apiClient,
}

export default function configureStore() {
  const epicMiddleware = createEpicMiddleware({ dependencies })

  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(epicMiddleware)),
  )
  epicMiddleware.run(rootEpic)
  return store
}
