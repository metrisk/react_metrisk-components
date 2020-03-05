import * as React from 'react'
import cx from 'classnames'
import INavigation from './types'

/**
 * The list item to render within the  navigation
 */
const NavigationItem: React.FC<INavigation.IItemProps> = ({ className, type, children }) => {
  const navItemClasses: INavigation.IItemClasses = {
    Vertical: 'nav__item--v'
  }

  return <li className={cx(className, 'nav__item', navItemClasses[type])}>{children}</li>
}

export default NavigationItem
