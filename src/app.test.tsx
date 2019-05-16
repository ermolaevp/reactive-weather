import React from 'react'
import renderWithRouter from './support/render-with-router'
import { Route } from 'react-router'
import {
  fireEvent,
  cleanup,
  waitForElement,
  prettyDOM,
} from 'react-testing-library'
import App from './app'
import { assert } from 'chai'

afterEach(cleanup)

describe('app', () => {
  it('renders home page', () => {
    const { history } = renderWithRouter(
      <Route component={App} path="/" exact={true} />,
      {
        route: '/',
      },
    )
  })
  it('renders not found page', () => {
    const { history, getByText } = renderWithRouter(
      <Route component={App} path="/" />,
      {
        route: '/not-found',
      },
    )
    const el = getByText('We can found nothing :(')
    assert.exists(el)
  })
  it('renders weather', () => {
    const { getByText } = renderWithRouter(<Route component={App} path="/" />, {
      route: '/',
    })
    const el = waitForElement(() => getByText('24.2'))
    assert.exists(el)
  })
})
