import React from 'react'
import { useApiFetch } from '../../hooks/use-api-fetch'
import styles from './styles'
import { withStyles, Typography } from '@material-ui/core'

interface IProps {
  classes: any
}

const Component = ({ classes }: IProps) => {
  const data = useApiFetch()
  if (data) {
    return (
      <div className={classes.root}>
        <Typography gutterBottom={true}>
          <span role="img" aria-label="day">
            🌞
          </span>{' '}
          {data.temperature_max}&deg;
        </Typography>
        <Typography gutterBottom={true}>
          <span role="img" aria-label="night">
            🌙
          </span>
          {data.temperature_min}&deg;
        </Typography>
        <Typography gutterBottom={true}>
          <span role="img" aria-label="precipitation probability">
            ☔️
          </span>{' '}
          {data.precipitation_probability}%
        </Typography>
        <Typography gutterBottom={true}>
          <span role="img" aria-label="precipitation">
            🌧
          </span>{' '}
          {data.precipitation_mm} mm
        </Typography>
      </div>
    )
  }
  return null
}

export const WeatherData = withStyles(styles)(Component)
