import React from 'react'
import styles from './styles'
import { Link, withStyles } from '@material-ui/core'
import { RouterLink } from '../router-link'

interface IProps {
  classes: any
  to: string
  children: string
}

const Component = ({ classes, children, ...rest }: IProps & any) => (
  <Link role="link" className={classes.root} component={RouterLink} {...rest}>
    {children}
  </Link>
)

export const LinkText = withStyles(styles)(Component)
