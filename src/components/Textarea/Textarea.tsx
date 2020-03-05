import * as React from 'react'
import cx from 'classnames'
import ITextarea from './types'

// Styles
import './Textarea.scss'

const Textarea = ({ className, name, type, value, onChange }: any) => (
  <textarea
    className={cx(className, 'input')}
    id={name}
    name={name}
    rows={6}
    value={value}
    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
      onChange(e.target.value)
    }
  />
)

export default Textarea
