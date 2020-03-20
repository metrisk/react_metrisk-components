import * as React from 'react'
import cx from 'classnames'
import ISelect from './types'

// Components
import { Icon } from '../Icon'

// Styles
import './Select.scss'

const selectClasses: any = {
  Error: 'select__input--error',
  Warning: 'select__input--warning',
  Success: 'select__input--success'
}
const BaseSelect = ({ name, value, state, options = [], optional, onChange }: ISelect.IProps) => (
  <div className={cx('select')}>
    <select
      className={cx('select__input', selectClasses[state])}
      name={name}
      value={value || ''}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value={''} disabled={!optional}>
        -- Select --
      </option>

      {options.map((x: any) => (
        <option key={`option-${x.value}`} value={x.value}>
          {x.label}
        </option>
      ))}
    </select>
    <Icon className={cx('select__icn')} name={'chevron-down'} colour={'Dark'} size={'Small'} />
  </div>
)

export default BaseSelect
