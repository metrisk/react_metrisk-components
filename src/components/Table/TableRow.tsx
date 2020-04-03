import * as React from 'react'
import cx from 'classnames'

/**
 * A row
 */
const TableRow = ({ header, interactive, children }: any) => (
  <tr className={cx('table__row', { 'table__row--header': header }, { 'table__row--interactive': interactive })}>
    {children}
  </tr>
)

export default TableRow
