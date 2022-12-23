import ISelect from './types'
import * as React from 'react'
import { useEffect, useState, useRef } from 'react'
import cx from 'classnames'
import { usePopper } from 'react-popper'

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
const Select = ({
  id,
  options,
  value,
  placeholder,
  optional,
  searchable,
  searchableLimit,
  popper,
  onChange
}: ISelect.IProps) => {
  const [tempValue, setTempValue] = useState(null)
  const normalisedTempValue = tempValue
    ? tempValue
        .toLowerCase()
        .replace(/[^a-zA-Z0-9]/g, '')
        .trim()
    : null
  const [open, setOpen] = useState(false)
  const [focused, setFocused] = useState(false)
  const element = useRef(null)
  const input = useRef(null)
  const popperRef = useRef(null)
  const { styles, attributes } = usePopper(element.current, popperRef.current, {
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [0, searchable ? 0 : -45]
        }
      }
    ],
    ...popper
  })

  useEffect(() => {
    const option = getOptionByValue(value)

    if (option && option.label !== tempValue) {
      setTempValue(option.label)
    }

    if (value === null) {
      setTempValue(null)
    }
  }, [value])

  useEffect(() => {
    const option = getOptionByValue(value)

    if (!option) {
      value !== null && onChange(null)
      setTempValue !== null && setTempValue(null)
    }
  }, [options])

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
    if (searchable) {
      setTempValue(null)
    }
  }

  const withinElement = (event: any) => {
    const related: any = event.relatedTarget

    if (related && related.contains(element.current)) return true

    return false
  }

  const isValidValue = (value: any) => {
    return value || value === 0 || value === false
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

    if (isValidValue(value)) {
      const option = getOptionByValue(value)

      if (option) setTempValue(option.label)
    } else {
      setTempValue(null)
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

  const filteredOptions =
    searchable && normalisedTempValue !== ''
      ? options.filter((x: any) =>
          x.label
            ?.toLowerCase()
            .replace(/[^a-zA-Z0-9]/g, '')
            .includes(normalisedTempValue || '')
        )
      : options
  const filteredAndLimitedOptions =
    searchable && searchableLimit ? filteredOptions.slice(0, searchableLimit + 1) : filteredOptions

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
            placeholder={placeholder ? placeholder : searchable ? 'Type to search...' : '-- Select --'}
            autoComplete="off"
            onClick={handleOpen}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={(e) => handleChange(e.target.value)}
          />
          <Icon className={cx('select__icn')} name={open ? 'chevron-up' : 'chevron-down'} colour="Dark" size="Small" />
        </div>
      </div>
      <div ref={popperRef} style={{ ...styles.popper, width: '100%', zIndex: 1000 }} {...attributes.popper}>
        <SelectOptions
          open={open}
          options={filteredAndLimitedOptions}
          optional={optional}
          handleClick={handleClick}
          handleBlur={handleBlur}
          searchable={searchable}
          limited={filteredOptions.length > searchableLimit + 1}
          value={value}
        />
      </div>
    </div>
  )
}

export default Select
