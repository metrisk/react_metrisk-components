import * as React from 'react'
import cx from 'classnames'

/**
 * Components
 */
import { Icon } from '../Icon'

/**
 * A cell
 */
const TableCell = ({ className, header, sort, children }: any) => (
  <td className={cx(className, 'table__cell', header && 'table__cell--header')}>
    {children}
    {sort && (
      <button className={cx('table__btn', header && 'table__btn--header')} onClick={sort}>
        <Icon name={'caret'} size={'Small'} />
      </button>
    )}
  </td>
)

export default TableCell
