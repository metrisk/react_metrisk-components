import IButton from './types'
import * as React from 'react'
import cx from 'classnames'

/**
 * Styles
 */
import './Button.scss'

/**
 * Components
 */
import { Icon } from '../Icon'
import { Link as RouterLink } from 'react-router-dom'

/**
 * Types
 */
const types = {
  Primary: 'btn--primary',
  Secondary: 'btn--secondary',
  Tertiary: 'btn--tertiary',
  Action: 'btn--action'
}

/**
 * Icon alignments
 */
const alignments = {
  Left: 'btn--l',
  Center: 'btn--c',
  Right: 'btn--r'
}

/**
 * A visual button that will also render as <a> if it has a href
 */
const Button = ({ className, href, type, icon, submit, disabled, children, onClick }: IButton.IProps) => {
  const Tag = href ? RouterLink : 'button'
  const btnType = submit ? 'submit' : !href ? 'button' : undefined

  const handleClick = (event: React.SyntheticEvent) => {
    if (onClick) {
      onClick(event)
    }
  }

  return (
    <Tag
      className={cx(className, 'btn', types[type], alignments[icon?.align], { 'btn--disabled': disabled })}
      type={btnType}
      to={href}
      disabled={disabled}
      onClick={handleClick}
    >
      {icon?.align === 'Left' && <Icon className={'btn__icn'} {...icon} />}
      {icon?.align === 'Center' && <Icon className={'btn__icn'} {...icon} />}
      {children}
      {icon?.align === 'Right' && <Icon className={'btn__icn'} {...icon} />}
    </Tag>
  )
}

export default Button
