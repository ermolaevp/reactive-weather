import MockAdapter from 'axios-mock-adapter'
import axios from 'axios'
import data from './fixtures/data'
import uniq from 'lodash/uniq'

export const mockApiClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
})

const mock = new MockAdapter(mockApiClient)

mock.onGet('/api/data').reply(config => {
  return [200, data]
})

mock.onGet('/api/places').reply(config => {
  return [200, uniq(data.map(d => d.place_name)).sort()]
})
