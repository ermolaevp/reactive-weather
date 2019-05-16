import React from 'react'
import {
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  withStyles,
} from '@material-ui/core'
import { useItemSelect } from '../../hooks/use-item-select'
import styles from './styles'

interface IProps {
  classes: any
}

const Component = ({ classes }: IProps) => {
  const [places, selectedPlace, handleSelectPlace] = useItemSelect(
    'city',
    '/api/places',
  )
  return (
    <FormControl className={classes.root}>
      <InputLabel htmlFor="places-select">City</InputLabel>
      <Select
        value={selectedPlace || -1}
        onChange={handleSelectPlace}
        fullWidth={true}
        inputProps={{
          name: 'places',
          id: 'places-select',
        }}
      >
        {places.map(place => (
          <MenuItem key={place} value={place}>
            {place}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export const PlaceSelect = withStyles(styles)(Component)
