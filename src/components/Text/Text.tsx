import * as React from 'react'
import cx from 'classnames'
import IText from './types'

/**
 * Styles
 */
import './Text.scss'

/**
 * A simple text component which renders the text tag of your choice
 *
 * @param props
 */
const Text: React.FC<IText.IProps> = ({ className, type, tag = 'p', children }) => {
  const cssClass = tag === 'p' && !type ? 'p' : type
  const Tag: React.ElementType = tag

  return <Tag className={cx(className, cssClass && cssClass.toLowerCase())}>{children}</Tag>
}

export default Text
