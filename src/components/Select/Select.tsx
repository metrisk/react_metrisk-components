import ISelect from './types'
import * as React from 'react'
import { useEffect, useState, useRef } from 'react'
import cx from 'classnames'

/**
 * Styles
 */
import './Select.scss'

/**
 * Components
 */
import SelectOptions from './SelectOptions'
import { Icon } from '../Icon'

/**
 * Determine which select type to render
 */
const Select = ({ id, options, value, optional, searchable, onChange }: ISelect.IProps) => {
  const [tempValue, setTempValue] = useState(null)
  const [open, setOpen] = useState(false)
  const [focused, setFocused] = useState(false)
  const element = useRef(null)
  const input = useRef(null)

  useEffect(() => {
    const option = getOptionByValue(value)

    if (option && option.label !== tempValue) {
      setTempValue(option.label)
    }
  }, [value])

  const getOptionByValue = (optionValue: string) => {
    return options.find((x: any) => x.value === optionValue)
  }

  /**
   * Handle change
   */
  const handleChange = (value: any) => {
    const option = getOptionByValue(value)
    if (option) {
      onChange(option.value)
      setTempValue(option.label)
    } else {
      if (searchable) {
        setTempValue(value)
      } else {
        onChange(null)
        setTempValue(null)
      }
    }
  }

  const handleOpen = () => {
    setOpen(true)
  }

  const handleFocus = () => {
    setFocused(true)
  }

  const withinElement = (event: any) => {
    const related: any = event.relatedTarget

    if (related && related.contains(element.current)) return true

    return false
  }

  const handleBlur = (event: React.FocusEvent<any>) => {
    // If a select option is clicked don't allow blur to occur
    const related: any = event.relatedTarget
    if (related?.classList && related.classList.contains('select__option')) return

    // If the focus is lost but we are still within the element capture focus back to the input
    if (withinElement(event) && element.current === event.relatedTarget) {
      input.current.focus()
      return
    }

    setOpen(false)
    setFocused(false)
  }

  /**
   * Handle when an option is selected
   */
  const handleClick = (value: string, event: React.MouseEvent) => {
    handleChange(value)
    setOpen(false)
  }

  const filtered = searchable
    ? options.filter((x: any) => x.label?.toLowerCase().includes(tempValue?.toLowerCase() || ''))
    : options

  return (
    <div className="select-root">
      <div className={cx('select-base', focused && 'select-base--focus')}>
        <div ref={element} className={cx('select')} tabIndex={-1}>
          <input
            ref={input}
            className={cx('select__input')}
            id={id}
            name={id}
            value={tempValue || ''}
            readOnly={!searchable}
            placeholder={searchable ? 'Type to search...' : '-- Select --'}
            autoComplete="off"
            onClick={handleOpen}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={(e) => handleChange(e.target.value)}
          />
          <Icon className={cx('select__icn')} name={open ? 'chevron-up' : 'chevron-down'} colour="Dark" size="Small" />
        </div>
      </div>
      <SelectOptions
        open={open}
        options={filtered}
        optional={optional}
        handleClick={handleClick}
        handleBlur={handleBlur}
        searchable={searchable}
        value={value}
      />
    </div>
  )
}

export default Select
