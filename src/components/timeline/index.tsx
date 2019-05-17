import React from 'react'
import { Grid, withStyles } from '@material-ui/core'
import range from 'lodash/range'
import { useQueryParam, DateParam } from 'use-query-params'
import styles from './styles'
import { TimelineDay } from '../timeline-day'

interface IProps {
  classes: any
}

const Component = ({ classes }: IProps) => {
  const [date, setDate] = useQueryParam('date', DateParam)
  const timeline = range(1407441600000, 1407787200000, 60 * 60 * 24 * 1000)
  const handleDayClick = (e: any) => {
    const day = +e.currentTarget.dataset.timestamp
    setDate(new Date(day))
  }
  return (
    <Grid
      className={classes.root}
      container={true}
      wrap="nowrap"
      data-testid="timeline"
    >
      {timeline.map(timestamp => {
        const day = new Date(timestamp).toDateString()
        return (
          <TimelineDay
            key={timestamp}
            date={new Date(timestamp)}
            active={date && date.toDateString() === day}
            onClick={handleDayClick}
          />
        )
      })}
    </Grid>
  )
}

export const Timeline = withStyles(styles)(Component)
