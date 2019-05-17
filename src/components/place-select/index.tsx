import React from 'react'
import {
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  withStyles,
} from '@material-ui/core'
import { usePlaceSelect } from '../../hooks/use-place-select'
import styles from './styles'
import { placesFetchAction } from '../../redux/reducers/places/actions'
import { PlacesStateType } from '../../redux/reducers/places'
import { createStructuredSelector } from 'reselect'
import { placesSelector } from '../../redux/reducers/places/selectors'
import { compose } from '../../utils/compose'
import { connect } from 'react-redux'

interface IProps {
  classes: any
  places: PlacesStateType
  placesFetch: typeof placesFetchAction
}

const Component = ({ classes, places, placesFetch }: IProps) => {
  React.useEffect(() => {
    placesFetch()
  }, [placesFetch])
  const [selectedPlace, handleSelectPlace] = usePlaceSelect()
  return (
    <FormControl className={classes.root}>
      <InputLabel htmlFor="places-select">City</InputLabel>
      <Select
        value={selectedPlace}
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

const selectors = createStructuredSelector({
  places: placesSelector,
})

const mapDispatch = {
  placesFetch: placesFetchAction,
}

export const PlaceSelect = compose(
  connect(
    selectors,
    mapDispatch,
  ),
  withStyles(styles),
)(Component)
