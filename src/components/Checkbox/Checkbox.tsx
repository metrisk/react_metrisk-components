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
import { Label } from '../Label'
import { Icon } from '../Icon'

const Checkbox = ({
  className,
  id,
  name,
  value,
  uncontrolled,
  state,
  children,
  onChange,
  ...props
}: ICheckbox.IProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event.target.checked)
    }
  }

  const renderLabel = () => {
    if (children) {
      return <span className={cx('checkbox__label', state === 'Error' && 'checkbox__label--error')}>{children}</span>
    }

    return null
  }

  const renderCheckbox = () => {
    return (
      <span className={cx('checkbox', { 'checkbox--disabled': props.disabled })}>
        <input
          className={cx('checkbox__input')}
          id={id}
          name={name}
          type={'checkbox'}
          checked={value || (uncontrolled ? undefined : false)}
          onChange={handleChange}
          {...props}
        />
        <span className="checkbox__box">
          <Icon
            className={cx('checkbox__icn', { 'checkbox__icn--checked': value })}
            name={'tick'}
            colour={'Light'}
            size={'Small'}
          />
        </span>
        <span className="checkbox__focus"></span>
      </span>
    )
  }

  if (children) {
    return (
      <Label className={cx({ 'label--disabled': props.disabled })} control>
        {renderCheckbox()}
        {renderLabel()}
      </Label>
    )
  }

  return renderCheckbox()
}

export default Checkbox
