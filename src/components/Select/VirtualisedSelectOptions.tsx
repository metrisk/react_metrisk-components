import * as React from 'react'
import { forwardRef, useEffect, useRef, useState } from 'react'
import cx from 'classnames'
import { DynamicSizeList as List } from '@john-osullivan/react-window-dynamic-fork'

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
  handleClick,
  handleBlur
}: ISelect.IOptionsProps) => {
  const listRef = useRef()
  const optionsWithOptional = optional ? [...options, { label: '-- Select --', value: null }] : options
  const [height, setHeight] = useState(250)
  const Row = forwardRef(({ index, style }: any, ref: any) => {
    return (
      <li
        ref={ref}
        key={index}
        style={style}
        className={cx('select__option', {
          'select__option--selected': value === optionsWithOptional[index].value,
          'select__option--transitioning': style.top === 0 && index !== 0
        })}
        onClick={(event) => handleClick(optionsWithOptional[index].value, event)}
        onBlur={handleBlur}
        tabIndex={0}
      >
        {optionsWithOptional[index].label}
      </li>
    )
  })
  const optionsCount = optionsWithOptional.length
  useEffect(() => {
    if (open && listRef.current) {
      const el: any = listRef.current
      if (optionsCount > 10) setHeight(parseInt(el._outerRef.style.height, 10))

      setTimeout(() => {
        const childHeight = [...el._outerRef.querySelectorAll('li')].reduce((h, child) => {
          return h + child.offsetHeight
        }, 0)

        setHeight(childHeight)
      }, 0)
    }

    if (height !== 250) setHeight(250)
  }, [options])

  return (
    <List
      key={optionsCount}
      ref={listRef}
      height={height}
      width={'100%'}
      itemCount={optionsCount}
      outerElementType="ul"
      className={cx('select__options', searchable && 'select__options--searchable')}
      style={{ display: open ? 'block' : 'none' }}
    >
      {Row}
    </List>
  )
}

export default SelectOptions
