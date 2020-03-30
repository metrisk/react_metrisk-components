import IText from './types'
import * as React from 'react'
import cx from 'classnames'

/**
 * Styles
 */
import './Text.scss'

/**
 * Types
 */
const types = {
  Alpha: 'text--alpha',
  Beta: 'text--beta',
  Gamma: 'text--gamma',
  Delta: 'text--delta',
  Epsilon: 'text--epsilon',
  Intro: 'text--intro',
  P: 'text--p',
}

/**
 * Align
 */
const alignments = {
  Left: 'text--left',
  Center: 'text--center',
  Right: 'text--right'
}

/**
 * A text component
 */
const Text = ({ className, type = 'P', tag = 'p', align = 'Left', children }: IText.IProps) => {
  const Tag: React.ElementType = tag

  return <Tag className={cx(className, 'text', types[type], alignments[align])}>{children}</Tag>
}

export default Text
