import React from 'react'
import styles from './styles'
import { Button, withStyles } from '@material-ui/core'
import { RouterLink } from '../router-link'

interface IProps {
  classes: any
  to: string
  children: string
}

const LnkBtn = ({ classes, children, ...rest }: IProps & any) => (
  <Button
    role="link"
    className={classes.root}
    classes={{ disabled: classes.disabled }}
    component={RouterLink}
    {...rest}
  >
    {children}
  </Button>
)

export const LinkButton = withStyles(styles)(LnkBtn)
