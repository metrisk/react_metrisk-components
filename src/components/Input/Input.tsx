import IInput from './types'
import * as React from 'react'
import cx from 'classnames'

/**
 * Styles
 */
import './Input.scss'

/**
 * A user input
 */
const Input = ({ className, id, name, type, value, autoComplete, onChange, uncontrolled, ...props }: IInput.IProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event.target.value)
    }
  }

  return (
    <input
      className={cx(className, 'input')}
      id={id}
      name={name}
      type={type}
      value={value || (uncontrolled ? undefined : '')}
      onChange={handleChange}
      autoComplete={autoComplete}
    />
  )
}

export default Input
