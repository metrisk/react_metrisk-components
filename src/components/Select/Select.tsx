import * as React from 'react'
import cx from 'classnames'
import ISelect from './types'

// Components
import { Icon } from '../Icon'

// Styles
import './Select.scss'

const Select = ({ options, name, value, optional, onChange }: ISelect.IProps) => {
  return (
    <div className={cx('select')}>
      <select
        className={cx('select__input')}
        name={name}
        value={value || ''}
        onChange={(e) => onChange(e.target.value)}
      >
        {(!value || optional) && <option value={null}>- Select -</option>}
        {options &&
          options.map((x: any) => (
            <option key={`option-${x.value}`} value={x.value}>
              {x.label}
            </option>
          ))}
      </select>
      <Icon className={cx('select__icn')} name={'chevron-down'} colour={'Dark'} size={'Small'} />
    </div>
  )
}

export default Select
