import * as React from 'react'
import cx from 'classnames'
import IField from './types'

// Styles
import './Field.scss'

// Components
import { Label } from '../Label'
import { Icon } from '../Icon'
import { FieldPicker } from '.'

const fieldMsgClasses: any = {
  Error: 'field__msg--error',
  Warning: 'field__msg--warning',
  Success: 'field__msg--success'
}

const fieldIcons: any = {
  Error: 'exclamation',
  Warning: 'info',
  Success: 'tick'
}

const Field = ({ className, label, state, msg, ...other }: any) => (
  <div className={cx(className, 'field')}>
    {label && (typeof label === 'object' ? label : <Label for={other.id}>{label}</Label>)}

    <FieldPicker state={state} {...other} />
    
    {state && <Icon className={cx('field__icn')} name={fieldIcons[state]} colour={state} />}
    {msg && <p className={cx('field__msg', fieldMsgClasses[state])}>{msg}</p>}
  </div>
)

export default Field
