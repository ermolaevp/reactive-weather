import { useState, useEffect } from 'react'
import { apiClient } from '../api/api-client'
import axios from 'axios'
import { useQueryParams, StringParam, DateParam } from 'use-query-params'

interface IData {
  station_id: number
  place_name: string
  latitude: number
  longitude: number
  datetime: string
  temperature_max: string
  temperature_min: string
  precipitation_probability: string
  precipitation_mm: string
}

export const useApiFetch = () => {
  const [query] = useQueryParams({
    city: StringParam,
    date: DateParam,
  })
  const { city = 'Amsterdam', date = new Date('2014-08-09') } = query
  const [data, setData] = useState<IData | undefined>()
  const CancelToken = axios.CancelToken
  const source = CancelToken.source()
  useEffect(() => {
    apiClient
      .get('api/data')
      .then(resp =>
        resp.data.find(
          (d: IData) =>
            d.place_name === city &&
            new Date(d.datetime).toDateString() === date.toDateString(),
        ),
      )
      .then(setData)
    return () => {
      source.cancel('Operation canceled by the user.')
    }
  }, [date, city, source])
  return data
}
