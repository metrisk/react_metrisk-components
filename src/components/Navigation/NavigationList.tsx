import * as React from 'react'
import cx from 'classnames'
import INavigation from './types'

/**
 * The unordered list to render within the  navigation
 */
const NavigationList: React.FC<INavigation.IListProps> = ({ className, type, depth, children }) => {
  const navListClasses: INavigation.IListClasses = {
    Vertical: 'nav__list--v'
  }

  return <ul className={cx(className, 'nav__list', navListClasses[type], `nav__list--${depth}`)}>{children}</ul>
}

export default NavigationList
