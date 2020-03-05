import * as React from 'react'
import cx from 'classnames'
import IIcon from './types'

/**
 * Styles
 */
import './Icon.scss'

/**
 * Render an icon
 */
const Icon: React.FC<IIcon.IProps> = ({ className, name, size, colour }) => {
  const icon = require(`../../assets/icons/${name}.svg`)

  const sizes: IIcon.ISizeClasses = {
    XSmall: 'icn--xs',
    Small: 'icn--sm',
    Large: 'icn--lg'
  }

  const colours: IIcon.IColourClasses = {
    Dark: 'icn--dark',
    Light: 'icn--light',
    Success: 'icn--success',
    Warning: 'icn--warning',
    Error: 'icn--error'
  }

  return (
    <span className={cx(className, 'icn', sizes[size], colours[colour])} dangerouslySetInnerHTML={{ __html: icon }} />
  )
}

export default Icon
