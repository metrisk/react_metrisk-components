import ICheckbox from './types'
import * as React from 'react'
import cx from 'classnames'

/**
 * Styles
 */
import './Checkbox.scss'

/**
 * Components
 */
import { Icon } from '../Icon'

const Checkbox = ({ className, id, name, value, uncontrolled, children, onChange }: ICheckbox.IProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event.target.checked)
    }
  }

  const renderLabel = () => {
    if (children) {
      return <span className="checkbox__label">{children}</span>
    }

    return null
  }

  return (
    <label className={cx(className, 'checkbox', { 'checkbox--checked': value })}>
      <span className="checkbox__wrapper">
        <input
          className={cx('checkbox__input')}
          id={id}
          name={name}
          type={'checkbox'}
          checked={value || (uncontrolled ? undefined : false)}
          onChange={handleChange}
        />
        <span className="checkbox__box">
          <Icon
            className={cx('checkbox__icn', { 'checkbox__icn--checked': value })}
            name={'tick'}
            colour={'Light'}
            size={'Small'}
          />
        </span>
      </span>
      {renderLabel()}
    </label>
  )
}

export default Checkbox
