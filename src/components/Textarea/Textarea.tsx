import ITextarea from './types'
import * as React from 'react'
import cx from 'classnames'

/**
 * Styles
 */
import './Textarea.scss'

/**
 * My component
 */
const Textarea = ({ className, id, name, value, uncontrolled, onChange }: ITextarea.IProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (onChange) {
      onChange(event.target.value)
    }
  }

  return (
    <textarea
      className={cx(className, 'textarea')}
      id={id}
      name={name}
      rows={6}
      value={value || (uncontrolled ? undefined : '')}
      onChange={handleChange}
    />
  )
}

export default Textarea
