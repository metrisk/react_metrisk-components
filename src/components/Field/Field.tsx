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
import { FieldPicker } from '.'

/**
 * Field states
 */
const states = {
  Success: '--success',
  Warning: '--warning',
  Error: '--error'
}

/**
 * Validation icons
 */
const icons: { [key: string]: string } = {
  Success: 'Tick',
  Warning: 'Info',
  Error: 'Exclamation'
}

const noLabelTypes = ['checkbox', 'radio']

/**
 * Field wrapper component
 */
const Field = ({ className, state, msg, displayMsg = true, fullWidth, ...props }: IField.IProps) => {
  const renderLabel = () => {
    const { label } = props

    if (!label || noLabelTypes.indexOf(props.type) !== -1) return null

    if (React.isValidElement(label)) return label

    return (
      <Label
        className={cx(props.inline && 'label--inline m m--r-md', state === 'Error' && `label${states[state]}`)}
        for={props.id}
      >
        {props.label}
        {props.required && ' *'}
      </Label>
    )
  }

  return (
    <div
      className={cx(
        className,
        'field',
        !displayMsg && 'field--no-msg',
        states[state] && `field${states[state]}`,
        fullWidth && 'field--full'
      )}
    >
      {renderLabel()}
      <div className={cx('field__wrapper', fullWidth && 'field__wrapper--full')}>
        <FieldPicker state={state} {...props} />
      </div>

      {displayMsg && (
        <span
          className={cx('field__msg', states[state] && `field__msg${states[state]}`, {
            'field--state': states[state],
            'field__msg--active': msg
          })}
        >
          {msg}
        </span>
      )}
    </div>
  )
}

export default Field
