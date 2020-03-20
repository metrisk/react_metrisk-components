import * as React from 'react'
import cx from 'classnames'
import INavigation from './types'

/**
 * The unordered list to render within the  navigation
 */
const NavigationList: React.FC<INavigation.IListProps> = ({ className, depth, children }) => {
  return <ul className={cx(className, 'nav__list', `nav__list--${depth}`)}>{children}</ul>
}

export default NavigationList
