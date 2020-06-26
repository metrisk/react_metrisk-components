import * as React from 'react'
import { useState } from 'react'
import cx from 'classnames'

import ITextarea from './types'

/**
 * Styles
 */
import './Textarea.scss'

/**
 * My component
 */
const Textarea = ({ className, id, name, value, uncontrolled, onChange }: ITextarea.IProps) => {
  const [focus, setFocus] = useState(false)

  const handleFocus = () => {
    setFocus(true)
  }

  const handleBlur = () => {
    setFocus(false)
  }

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (onChange) {
      onChange(event.target.value)
    }
  }

  return (
    <div className={cx('input-base', focus && 'input-base--focus')}>
      <textarea
        className={cx(className, 'textarea')}
        id={id}
        name={name}
        rows={6}
        value={value || (uncontrolled ? undefined : '')}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </div>
  )
}

export default Textarea
