import * as React from 'react'
import { useRef } from 'react'
import cx from 'classnames'
import INavigation from './types'

/**
 * The unordered list to render within the  navigation
 */
const NavigationList = ({ className, depth, open, children }: INavigation.IListProps) => {
  const ref: any = useRef()
  const maxHeight = open && ref?.current.scrollHeight

  return (
    <ul
      ref={ref}
      className={cx(className, 'nav__list', `nav__list--${depth}`, { 'nav__list--open': open })}
      style={{ maxHeight }}
    >
      {children}
    </ul>
  )
}

export default NavigationList
