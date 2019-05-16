import React from 'react'
import { Grid, withStyles, Card, CardContent } from '@material-ui/core'
import { MainLayout } from '../../layouts/main'
import { Timeline } from '../../components/timeline'
import { PlaceSelect } from '../../components/place-select'
import { WeatherData } from '../../components/weather-data'
import styles from './styles'

interface IProps {
  classes: any
}

const Component = ({ classes }: IProps) => {
  return (
    <MainLayout>
      <div className={classes.root}>
        <Grid
          container={true}
          justify="center"
          alignContent="center"
          className={classes.content}
        >
          <Grid item={true} xs={10} sm={6} md={4} lg={3} xl={2}>
            <Card>
              <CardContent>
                <PlaceSelect />
                <WeatherData />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Timeline />
      </div>
    </MainLayout>
  )
}

export const HomePage = withStyles(styles)(Component)
