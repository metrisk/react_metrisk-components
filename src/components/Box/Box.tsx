import IBox from './types'
import * as React from 'react'
import cx from 'classnames'

/**
 * Styles
 */
import './Box.scss'
import '../../index.scss' // @todo - import this somewhere else

/**
 * Alignment classes
 */
const alignX = {
  Start: 'box--start-x',
  End: 'box--end-x',
  Center: 'box--center-x'
}

const alignY = {
  Start: 'box--start-y',
  End: 'box--end-y',
  Center: 'box--center-y'
}

/**
 * My component
 */
const Box = ({ className, align, children }: IBox.IProps) => (
  <div className={cx(className, 'box', alignX[align?.x], alignY[align?.y])}>{children}</div>
)

export default Box
