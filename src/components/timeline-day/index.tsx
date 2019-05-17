import React from 'react'
import styles from './styles'
import {
  Grid,
  Card,
  CardContent,
  withStyles,
  Typography,
} from '@material-ui/core'

interface IProps {
  classes: any
  date: Date
  active?: boolean
  onClick: (e: any) => void
}

const Component = ({ classes, date, active, onClick }: IProps) => {
  const isActive =
    typeof active === 'undefined'
      ? date.toDateString() === 'Fri Aug 08 2014'
      : active
  const timestamp = date.getTime()
  return (
    <Grid
      key={timestamp}
      item={true}
      className={classes.root}
      data-timestamp={timestamp}
      onClick={onClick}
      role="button"
    >
      <Card>
        <CardContent>
          <Typography
            align="center"
            variant="h4"
            paragraph={true}
            color={isActive ? 'secondary' : 'default'}
          >
            {date.getDate()}
          </Typography>
          <Typography
            align="center"
            variant="h6"
            color={isActive ? 'secondary' : 'default'}
          >
            {date.toDateString()}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  )
}

export const TimelineDay = withStyles(styles)(Component)
