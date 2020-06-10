import IGrid from './types'
import * as React from 'react'
import cx from 'classnames'

/**
 * Alignment classes
 */
const alignX = {
  Start: 'grid__item--start-x',
  End: 'grid__item--end-x',
  Center: 'grid__item--center-x'
}

const alignY = {
  Start: 'grid__item--start-y',
  End: 'grid__item--end-y',
  Center: 'grid__item--center-y'
}

/**
 * Grid item that sits within the main grid component.
 */
const GridItem = ({ className, span, align, children }: IGrid.IItemProps) => (
  <div className={cx(className, 'grid__item', span && `grid__item--${span}`, alignX[align?.x], alignY[align?.y])}>
    {children}
  </div>
)

export default GridItem
