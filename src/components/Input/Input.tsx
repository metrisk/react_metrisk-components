import * as React from 'react'
import cx from 'classnames'
import IInput from './types'

// Styles
import './Input.scss'

const inputClasses: any = {
  Error: 'input--error',
  Warning: 'input--warning',
  Success: 'input--success'
}

const Input = ({ className, id, type, value, state, disabled, onChange }: any) => (
  <input
    className={cx(className, 'input', inputClasses[state], { 'input--disabled': disabled  })}
    id={id}
    type={type}
    value={value || ''}
    disabled={disabled}
    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
      onChange(type === 'number' ? parseInt(e.target.value) : e.target.value)
    }
  />
)

export default Input
