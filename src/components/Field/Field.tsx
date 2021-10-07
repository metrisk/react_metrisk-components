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
  const hasNoLabel = () => {
    return !props.label || noLabelTypes.indexOf(props.type) !== -1
  }

  const isInline = (): boolean => {
    if (props.inline !== undefined) return props.inline

    return hasNoLabel()
  }

  const renderLabel = () => {
    const { label } = props

    if (hasNoLabel()) return null

    return (
      <Label
        className={cx(props.inline && 'label--inline m m--r-md', state === 'Error' && `label${states[state]}`)}
        for={props.id}
      >
        {label}
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
      <div className={cx('field__content', { 'field__content--inline': isInline() })}>
        {renderLabel()}
        <div className={cx('field__wrapper', { 'field__wrapper--full': fullWidth })}>
          <FieldPicker state={state} {...props} />
        </div>
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
