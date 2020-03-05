import * as React from 'react'
import cx from 'classnames'
import IButton from './types'

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
 * A visual button that will also render as <a> if it has a href
 */
const Button: React.FC<IButton.IProps> = ({ className, href, type, icon, submit, children, onClick }) => {
  const Tag: any = href ? RouterLink : 'button'
  const btnType = submit ? 'submit' : !href ? 'button' : undefined

  const btnClasses: IButton.IClasses = {
    Primary: 'btn--primary',
    Secondary: 'btn--secondary',
    Tertiary: 'btn--tertiary',
    Action: 'btn--action'
  }

  const btnIcnClasses: IButton.IIconClasses = {
    Left: 'btn__icn--l',
    Right: 'btn__icn--r',
    Center: 'btn__icn--c'
  }

  const renderIcon = (position: IButton.IProps['icon']['position'] = 'Center') =>
    (icon.position || 'Center') === position && <Icon className={cx('btn__icn', btnIcnClasses[position])} {...icon} />

  return (
    <Tag className={cx(className, 'btn', btnClasses[type])} type={btnType} to={href} onClick={onClick}>
      {icon && renderIcon(type === 'Action' ? 'Center' : 'Left')}
      {children}
      {icon && renderIcon('Right')}
    </Tag>
  )
}

export default Button
