import * as React from 'react'
import cx from 'classnames'

import ISelect from './types'

/**
 * Render a filtered list or the original list of options
 */
const SelectOptions = ({
  open,
  options,
  optional,
  value,
  searchable,
  limited,
  handleClick,
  handleBlur,
}: ISelect.IOptionsProps) => {
  return (
    <ul
      className={cx('select__options', searchable && 'select__options--searchable')}
      style={{ display: open ? 'block' : 'none' }}
    >
      {optional && (
        <li className={cx('select__option')} onClick={() => handleClick(null)} tabIndex={0}>
          <span className="select__option-content">-- Select --</span>
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
          <span className="select__option-content">{x.label}</span>
        </li>
      ))}

      {limited && (
        <li className={cx('select__option')} tabIndex={0}>
          <span className="select__option-content">-- Type To Search All Options --</span>
        </li>
      )}
    </ul>
  )
}

export default SelectOptions
