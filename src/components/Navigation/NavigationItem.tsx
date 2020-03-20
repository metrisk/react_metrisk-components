import * as React from 'react'
import cx from 'classnames'
import INavigation from './types'

/**
 * The list item to render within the  navigation
 */
const NavigationItem: React.FC<INavigation.IItemProps> = ({ className, type, children }) => {
  return <li className={cx(className, 'nav__item')}>{children}</li>
}

export default NavigationItem
