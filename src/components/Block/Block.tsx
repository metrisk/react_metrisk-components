import * as React from 'react'
import cx from 'classnames'
import IBlock from './types'

/**
 * Styles
 */
import './Block.scss'

/**
 * Block Classes
 */
const blockClasses: IBlock.IClasses = {
  Fill: 'block--fill'
}

/**
 * A simple div - use to section content
 */
const Block: React.FC<IBlock.IProps> = ({ className, type, children }) => (
  <div className={cx(className, 'block', blockClasses[type])}>{children}</div>
)

export default Block
