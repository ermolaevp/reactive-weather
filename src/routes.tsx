import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { NotFoundPage } from './pages/not-found'
import { HomePage } from './pages/home'

const Routes = () => (
  <Switch>
    <Route component={HomePage} path="/" exact={true} />
    <Route component={NotFoundPage} />
  </Switch>
)

export default Routes
