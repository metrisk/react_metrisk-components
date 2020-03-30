import ILabel from './types'
import * as React from 'react'
import cx from 'classnames'

/**
 * Styles
 */
import './Label.scss'

/**
 * A label
 */
const Label = ({ className, for: htmlFor, children }: ILabel.IProps) => (
  <label className={cx(className, 'label')} htmlFor={htmlFor}>
    {children}
  </label>
)

export default Label
