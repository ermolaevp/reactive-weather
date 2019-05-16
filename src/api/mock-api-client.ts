import MockAdapter from 'axios-mock-adapter'
import axios from 'axios'

const mockApiClient = axios.create({ baseURL: process.env.REACT_APP_API_URL })

const mock = new MockAdapter(mockApiClient)

const contact = { id: 42, name: 'Matt', favorite: false, number: '+123' }

mock
  .onPut('/users/user_id/contacts/42', { params: { favorite: true } })
  .reply(config => {
    return [200, { ...contact, favorite: true }]
  })

export default mockApiClient
