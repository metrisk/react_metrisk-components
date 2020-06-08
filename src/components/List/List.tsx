import IList from './types'
import * as React from 'react'
import cx from 'classnames'

/**
 * Styles
 */
import './List.scss'

/**
 * List of items
 */
const List = ({ className, children }: IList.IProps) => <ul className={cx(className, 'list')}>{children}</ul>

export default List
