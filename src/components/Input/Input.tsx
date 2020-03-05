import * as React from 'react'
import cx from 'classnames'
import IInput from './types'

// Styles
import './Input.scss'

const Input = ({ className, name, type, value, onChange }: any) => (
  <input
    className={cx(className, 'input')}
    id={name}
    name={name}
    type={type}
    value={value}
    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
      onChange(type === 'number' ? parseInt(e.target.value) : e.target.value)
    }
  />
)

export default Input
