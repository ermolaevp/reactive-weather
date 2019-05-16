import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import styles from './styles'
import { LinkText } from '../../components/link-text'

interface IProps {
  classes: any
  children: any
}

const Component = ({ classes, children }: IProps) => {
  return (
    <div className={classes.root}>
      <AppBar>
        <Toolbar>
          <Typography variant="h6" color="inherit">
            <LinkText to="/" color="inherit" underline="none">
              Reactive Weather
            </LinkText>
          </Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.toolbar} />
      <div className={classes.content}>{children}</div>
    </div>
  )
}

export const MainLayout = withStyles(styles)(Component)
