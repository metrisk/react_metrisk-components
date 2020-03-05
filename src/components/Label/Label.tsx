import * as React from 'react'
import cx from 'classnames'
import ILabel from './types'

// Styles
import './Label.scss'

const Label = ({ className, name, value, children }: any) => (
  <label className={cx(className, 'label')}>{children}</label>
)

export default Label
