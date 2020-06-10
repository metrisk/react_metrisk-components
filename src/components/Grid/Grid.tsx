import IGrid from './types'
import * as React from 'react'
import cx from 'classnames'

/**
 * Styles
 */
import './Grid.scss'

/**
 * Alignment classes
 */
const alignX = {
  Start: 'grid--start-x',
  End: 'grid--end-x',
  Center: 'grid--center-x'
}

const alignY = {
  Start: 'grid--start-y',
  End: 'grid--end-y',
  Center: 'grid--center-y'
}

/**
 * A grid system using CSS Grid
 */
const Grid = ({ className, gutter, align, children }: IGrid.IProps) => (
  <div className={cx(className, 'grid', { 'grid--gutter': gutter }, alignX[align?.x], alignY[align?.y])}>
    {children}
  </div>
)

export default Grid
