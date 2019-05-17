import { useState } from 'react'

export const useItemSelect = (): [number, (e: any) => void] => {
  const [selectedItem, selectItem] = useState(-1)
  const handleSelectItem = (e: any) => {
    selectItem(e.target.value)
  }
  return [selectedItem, handleSelectItem]
}
