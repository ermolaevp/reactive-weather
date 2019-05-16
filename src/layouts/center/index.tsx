import React from 'react'
import styles from './styles'
import { withStyles, Grid } from '@material-ui/core'

interface IProps {
  classes: any
  children: JSX.Element | JSX.Element[]
}

const Component = ({ classes, children }: IProps) => (
  <Grid
    container={true}
    alignContent="center"
    alignItems="center"
    justify="center"
    className={classes.root}
  >
    <Grid item={true} lg={3} md={4} xs={10}>
      {children}
    </Grid>
  </Grid>
)

export const CenterLayout = withStyles(styles)(Component)
