import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import { Provider } from 'react-redux'
import { MuiThemeProvider } from '@material-ui/core/styles'
import defaultTheme from './themes/default'
import { Route } from 'react-router-dom'
import { QueryParamProvider } from 'use-query-params'
import configureStore from './redux/configure-store'
import Routes from './routes'

const store = configureStore()

const App = () => {
  return (
    <Provider store={store}>
      <QueryParamProvider ReactRouterRoute={Route}>
        <MuiThemeProvider theme={defaultTheme}>
          <CssBaseline />
          <Routes />
        </MuiThemeProvider>
      </QueryParamProvider>
    </Provider>
  )
}

export default App
