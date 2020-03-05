import * as React from 'react'
import cx from 'classnames'
import ICheckbox from './types'

// Components
import { Icon } from '../Icon'

// Styles
import './Checkbox.scss'

const Checkbox = ({ className, name, value = false, onChange }: any) => (
  <label className={cx(className, 'checkbox', { 'checkbox--checked': value })}>
    <input
      className={cx('checkbox__input')}
      id={name}
      name={name}
      type={'checkbox'}
      checked={value || false}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.checked)}
    />
    <Icon
      className={cx('checkbox__icn', { 'checkbox__icn--checked': value })}
      name={'tick'}
      colour={'Light'}
      size={'Small'}
    />
  </label>
)

export default Checkbox
