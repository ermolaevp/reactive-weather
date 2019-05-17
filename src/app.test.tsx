import React from 'react'
import renderWithRouter from './support/render-with-router'
import { Route } from 'react-router'
import {
  fireEvent,
  cleanup,
  waitForElement,
  getAllByRole,
} from 'react-testing-library'
import App from './app'
import { assert } from 'chai'

afterEach(cleanup)

describe('app', () => {
  it('renders weather page', () => {
    const { history, getByText, getByTestId } = renderWithRouter(
      <Route component={App} path="/" />,
      {
        route: '/',
      },
    )
    const el = waitForElement(() => getByText('24.2'))
    assert.exists(el)

    const timelineEl = getByTestId('timeline')
    const buttons = getAllByRole(timelineEl, 'button')
    fireEvent.click(buttons[3])
    assert.equal('?date=2014-08-11', history.location.search)
  })
  it('renders not found page', () => {
    const { getByText } = renderWithRouter(<Route component={App} path="/" />, {
      route: '/not-found',
    })
    const el = getByText('We can found nothing :(')
    assert.exists(el)
  })
})
