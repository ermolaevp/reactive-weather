import React from 'react'
import styles from './styles'
import { withStyles, Typography } from '@material-ui/core'
import { useQueryParam, StringParam, DateParam } from 'use-query-params'
import { forecastSelector } from '../../redux/reducers/forecast/selectors'
import { createStructuredSelector } from 'reselect'
import { forecastFetchAction } from '../../redux/reducers/forecast/actions'
import { ForecastStateType } from '../../redux/reducers/forecast'
import { compose } from '../../utils/compose'
import { connect } from 'react-redux'

interface IProps {
  classes: any
  forecast: ForecastStateType
  forecastFetch: typeof forecastFetchAction
}

const Component = ({ classes, forecast, forecastFetch }: IProps) => {
  const [place = 'Amsterdam'] = useQueryParam('place', StringParam)
  const [date = new Date('2014-08-09')] = useQueryParam('date', DateParam)
  const dateString = date.toDateString()
  React.useEffect(() => {
    forecastFetch(place, dateString)
  }, [place, dateString, forecastFetch])
  return (
    <div className={classes.root}>
      <Typography gutterBottom={true}>
        <span role="img" aria-label="day">
          🌞
        </span>{' '}
        {forecast.temperature_max}&deg;
      </Typography>
      <Typography gutterBottom={true}>
        <span role="img" aria-label="night">
          🌙
        </span>
        {forecast.temperature_min}&deg;
      </Typography>
      <Typography gutterBottom={true}>
        <span role="img" aria-label="precipitation probability">
          ☔️
        </span>{' '}
        {forecast.precipitation_probability}%
      </Typography>
      <Typography gutterBottom={true}>
        <span role="img" aria-label="precipitation">
          🌧
        </span>{' '}
        {forecast.precipitation_mm} mm
      </Typography>
    </div>
  )
}

const selectors = createStructuredSelector({
  forecast: forecastSelector,
})

const mapDispatch = {
  forecastFetch: forecastFetchAction,
}

export const WeatherData = compose(
  connect(
    selectors,
    mapDispatch,
  ),
  withStyles(styles),
)(Component)
