import * as React from 'react'
import { Fragment } from 'react'
import cx from 'classnames'
import INavigation from './types'

/**
 * Components
 */
import { Icon } from '../Icon'
import { Link as RouterLink } from 'react-router-dom'

/**
 * The link to render within the  navigation
 */
const NavigationLink: React.FC<INavigation.ILinkProps> = ({ className, type, href, icon, children, onClick }) => {
  const navLinkClasses: INavigation.ILinkClasses = {
    Vertical: 'nav__link--v'
  }

  const renderChildren = (
    <Fragment>
      {children}
      {icon && <Icon name={icon} />}
    </Fragment>
  )

  return href ? (
    <RouterLink className={cx(className, 'nav__link')} to={href}>
      {renderChildren}
    </RouterLink>
  ) : (
    <button className={cx(className, 'nav__link', navLinkClasses[type])} onClick={onClick}>
      {renderChildren}
    </button>
  )
}

export default NavigationLink
