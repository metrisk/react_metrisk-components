import * as React from 'react'
import cx from 'classnames'
import IField from './types'

// Styles
import './Field.scss'

// Components
import { Label } from '../Label'
import { FieldPicker } from '.'

const Field = ({ className, label, ...other }: any) => (
  <div className={cx(className, 'field')}>
    {label && <Label>{label}</Label>}
    <FieldPicker {...other} />
  </div>
)

export default Field
