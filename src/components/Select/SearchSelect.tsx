import * as React from 'react'
import { useState } from 'react'
import cx from 'classnames'

// Components
import { Icon } from '../Icon'

const selectClasses: any = {
  Error: 'select__input--error',
  Warning: 'select__input--warning',
  Success: 'select__input--success'
}

const SearchSelect = ({ options, value, state, onChange }: any) => {
  const [open, setOpen] = useState(false)

  const handleClick = (value: string) => {
    onChange(value)
    setOpen(false)
  }

  return (
    <span className={cx('select')} onFocus={() => setOpen(true)} onBlur={() => setOpen(false)} tabIndex={-1}>
      <input
        className={cx('select__input', selectClasses[state])}
        placeholder={'Type to search...'}
        value={options.find((x: any) => value === x.value)?.label || value || ''}
        onFocus={() => setOpen(true)}
        onChange={(e) => onChange(e.target.value)}
      />

      <ul className={cx('select__options')} style={{ display: open ? 'block' : 'none' }}>
        {options
          .filter((x: any) => x.value?.toLowerCase().includes(value?.toLowerCase() || ''))
          .map((x: any) => (
            <li key={`option-${x.value}`} className={cx('select__option')} onClick={() => handleClick(x.value)}>
              {x.label}
            </li>
          ))}
      </ul>

      <Icon className={cx('select__icn')} name={open ? 'chevron-up' : 'chevron-down'} colour={'Dark'} size={'Small'} />
    </span>
  )
}

export default SearchSelect
