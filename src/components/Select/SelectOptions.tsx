import ISelect from './types'
import * as React from 'react'
import cx from 'classnames'

/**
 * Render a filtered list or the original list of options
 */
const SelectOptions = ({
  open,
  options,
  optional,
  value,
  searchable,
  handleClick,
  handleBlur
}: ISelect.IOptionsProps) => {

  return (
    <ul
      className={cx('select__options', searchable && 'select__options--searchable')}
      style={{ display: open ? 'block' : 'none' }}
    >
      {optional && (
        <li className={cx('select__option')} value={''} onClick={() => handleClick(null)} tabIndex={0}>
          -- Select --
        </li>
      )}

      {options.map((x: any) => (
        <li
          key={`option-${x.value}`}
          className={cx('select__option', { 'select__option--selected': value === x.value })}
          onClick={(event) => handleClick(x.value, event)}
          onBlur={handleBlur}
          tabIndex={0}
        >
          {x.label}
        </li>
      ))}
    </ul>
  )
}

export default SelectOptions
