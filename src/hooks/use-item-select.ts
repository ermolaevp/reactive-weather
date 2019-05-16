import { useState, useEffect } from 'react'
import { apiClient } from '../api/api-client'
import { useQueryParam, StringParam } from 'use-query-params'
import axios from 'axios'

type UseItemSelect = [string[], string | undefined, (e: any) => void]

export const useItemSelect = (name: string, uri: string): UseItemSelect => {
  const [item = 'Amsterdam', setItem] = useQueryParam(name, StringParam)
  const [items, setItems] = useState<string[]>([])
  const CancelToken = axios.CancelToken
  const source = CancelToken.source()
  const handleSelectItem = (e: any) => {
    setItem(e.target.value)
  }
  useEffect(() => {
    apiClient.get(uri).then(resp => {
      setItems(resp.data)
    })
    return () => {
      source.cancel('Operation canceled by the user.')
    }
  }, [uri, source])
  return [items, item, handleSelectItem]
}
