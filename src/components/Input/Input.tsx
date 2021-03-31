import * as React from 'react'
import { useState } from 'react'
import cx from 'classnames'

import IInput from './types'

/**
 * Styles
 */
import './Input.scss'

/**
 * A user input
 */
const Input = ({
  className,
  id,
  name,
  type = 'text',
  value,
  autoComplete,
  onChange,
  uncontrolled,
  ...props
}: IInput.IProps) => {
  const [focus, setFocus] = useState(false)

  const handleFocus = () => {
    setFocus(true)
  }

  const handleBlur = () => {
    setFocus(false)
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event.target.value)
    }
  }

  return (
    <div className={cx('input-base', focus && 'input-base--focus')}>
      <input
        className={cx(className, 'input')}
        id={id}
        name={name}
        type={type}
        value={value || (uncontrolled ? undefined : '')}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        autoComplete={autoComplete}
        {...props}
      />
    </div>
  )
}

export default Input
