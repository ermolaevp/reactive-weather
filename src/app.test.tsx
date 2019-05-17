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

    const el1 = waitForElement(() => getByText('21.8'))
    assert.exists(el1)
  })
  it('renders not found page', () => {
    const { getByText } = renderWithRouter(<Route component={App} path="/" />, {
      route: '/not-found',
    })
    const el = getByText('We can found nothing :(')
    assert.exists(el)
  })
})
