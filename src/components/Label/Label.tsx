import * as React from 'react'
import cx from 'classnames'
import ILabel from './types'

// Styles
import './Label.scss'

const Label = ({ className, for: htmlFor, children }: any) => (
  <label className={cx(className, 'label')} htmlFor={htmlFor}>
    {children}
  </label>
)

export default Label
