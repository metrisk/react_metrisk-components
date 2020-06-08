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
const Input = ({ className, id, name, type, value, onChange, controlled = true }: IInput.IProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event.target.value)
    }
  }

  return <input
    className={cx(className, 'input')}
    id={id}
    name={name}
    type={type}
    value={value || (controlled ? '' : null)}
    onChange={handleChange}
  />
}

export default Input
