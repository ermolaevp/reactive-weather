import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import { Router } from 'react-router'
import { createMemoryHistory } from 'history'

it('renders without crashing', () => {
  const history = createMemoryHistory({ initialEntries: ['/'] })
  const div = document.createElement('div')
  ReactDOM.render(
    <Router history={history}>
      <App />
    </Router>,
    div,
  )
  ReactDOM.unmountComponentAtNode(div)
})
