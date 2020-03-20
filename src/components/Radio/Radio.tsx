import * as React from 'react'
import cx from 'classnames'
import IRadio from './types'

// Styles
import './Radio.scss'

const Radio = ({ className, id, value, onChange }: any) => (
  <label className={cx(className, 'radio', { 'radio--checked': value })}>
    <input
      className={cx('radio__input')}
      id={id}
      name={id}
      type={'radio'}
      checked={value || false}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.checked)}
    />
    <span className={cx('radio__icn', { 'radio__icn--checked': value })} />
  </label>
)

export default Radio
