import IField from './types'
import * as React from 'react'
import cx from 'classnames'

/**
 * Styles
 */
import './Field.scss'

/**
 * Components
 */
import { Label } from '../Label'
import { Icon } from '../Icon'
import { FieldPicker } from '.'

/**
 * Validation message
 */
const states = {
  Success: 'field--success',
  Warning: 'field--warning',
  Error: 'field--error'
}

/**
 * Validation icons
 */
const icons: { [key: string]: string } = {
  Success: 'Tick',
  Warning: 'Info',
  Error: 'Exclamation'
}

/**
 * Field wrapper component
 */
const Field = ({ className, state, msg, ...props }: IField.IProps) => {
  const renderLabel = () => {
    const { label } = props

    if (!label) return null

    if (React.isValidElement(label)) return label

    return (
      <Label className="m m--r-md" for={props.id}>
        {props.label}
      </Label>
    )
  }

  return (
    <div className={cx(className, 'field', states[state])}>
      {renderLabel()}

      <FieldPicker state={state} {...props} />

      {state && <Icon className={'field__icn'} name={icons[state]} colour={state} />}
      {msg && <p className={'field__msg'}>{msg}</p>}
    </div>
  )
}

export default Field
