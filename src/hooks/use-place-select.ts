import { useQueryParam, StringParam } from 'use-query-params'

export const usePlaceSelect = (): [string, (e: any) => void] => {
  const [place = 'Amsterdam', setPlace] = useQueryParam('place', StringParam)
  const handleSelectPlace = (e: any) => {
    setPlace(e.target.value)
  }
  return [place, handleSelectPlace]
}
