import React from 'react'
import { Typography, withStyles, Grid } from '@material-ui/core'
import styles from './styles'
import { LinkButton } from '../../components/link-button'
import { CenterLayout } from '../../layouts/center'

const Component = ({ classes }: any) => (
  <CenterLayout>
    <Typography
      align="center"
      variant="h5"
      color="default"
      paragraph={true}
      gutterBottom={true}
    >
      We can found nothing :(
    </Typography>
    <Grid item={true} container={true} justify="center">
      <LinkButton to="/" color="secondary">
        Go to the main page
      </LinkButton>
    </Grid>
  </CenterLayout>
)

export const NotFoundPage = withStyles(styles)(Component)
