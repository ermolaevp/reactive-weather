import React from 'react'
import { Link, LinkProps } from 'react-router-dom'

export const RouterLink = ({ to, ...rest }: LinkProps) => (
  <Link to={to} {...rest} />
)
