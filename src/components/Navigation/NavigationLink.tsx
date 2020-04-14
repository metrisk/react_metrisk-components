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
const NavigationLink: React.FC<INavigation.ILinkProps> = ({ className, component, href, icon, children, onClick }) => {
  const renderChildren = (
    <Fragment>
      {children}
      {icon && <Icon name={icon} />}
    </Fragment>
  )

  if (href) {
    if (component) {
      const Tag: any = component
      return (
        <Tag className={cx(className, 'nav__link')} to={href}>
          {renderChildren}
        </Tag>
      )
    } else {
      return (
        <RouterLink className={cx(className, 'nav__link')} to={href}>
          {renderChildren}
        </RouterLink>
      )
    }
  } else {
    return (
      <button className={cx(className, 'nav__link')} onClick={onClick}>
        {renderChildren}
      </button>
    )
  }
}

export default NavigationLink
