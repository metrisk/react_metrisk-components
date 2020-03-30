import IHeader from './types'
import * as React from 'react'
import * as cx from 'classnames'

/**
 * Styles
 */
import './Header.scss'

/**
 * Components
 */
import { Text } from '../Text'

/**
 * Header classes
 */
const types = {
  Fixed: 'header--fixed'
}

/**
 * A simple header component with a heading and subheading
 */
const Header = ({ className, type, heading, subheading, children }: IHeader.IProps) => (
  <header className={cx(className, 'header', types[type])}>
    {heading && (
      <Text tag={'h1'} type={'Alpha'}>
        {heading}
      </Text>
    )}
    {subheading && (
      <Text tag={'h2'} type={'Beta'}>
        {subheading}
      </Text>
    )}
    {children}
  </header>
)

export default Header
