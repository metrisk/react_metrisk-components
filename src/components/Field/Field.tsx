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
const Field = ({ className, state, msg, ...props }: IField.IProps) => {
  const renderLabel = () => {
    const { label } = props

    if (!label || noLabelTypes.indexOf(props.type) !== -1) return null

    if (React.isValidElement(label)) return label

    return (
      <Label
        className={cx('m m--r-md', props.inline && 'label--inline', state === 'Error' && `label${states[state]}`)}
        for={props.id}
      >
        {props.label}
      </Label>
    )
  }

  return (
    <div className={cx(className, 'field', states[state] && `field${states[state]}`)}>
      {renderLabel()}
      <div className="field__wrapper">
        <FieldPicker state={state} {...props} />
      </div>

      {state && <Icon className={'field__icn'} name={icons[state]} colour={state} />}
      {msg && <span className={cx('field__msg', states[state] && `field__msg${states[state]}`)}>{msg}</span>}
    </div>
  )
}

export default Field
