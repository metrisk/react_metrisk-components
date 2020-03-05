import * as React from 'react'
import cx from 'classnames'
import ILink from './types'

/**
 * Styles
 */
import './Link.scss'

/**
 * Components
 */
import { Link as RouterLink } from 'react-router-dom'

/**
 * A simple link using React Router
 */
const Link: React.SFC<ILink.IProps> = ({ className, href, children }) => (
  <RouterLink className={cx(className, 'link')} to={href}>
    {children}
  </RouterLink>
)

export default Link
