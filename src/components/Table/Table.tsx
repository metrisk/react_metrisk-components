import ITable from './types'
import * as React from 'react'
import cx from 'classnames'

/**
 * Styles
 */
import './Table.scss'

/**
 * Components
 */
import { TableRow, TableCell } from './index'

/**
 * My component
 */
const Table = ({ className, header = [], rows }: ITable.IProps) => {

  const renderCells = (cells: any[], header?: boolean) => 
    cells.map((x: any, i: number) => (
      <TableCell
        className={x.className}
        key={`cell-${i}`}
        header={header}
        // width={x.width}
        // sort={x.sort ? () => this.sort(i) : false}
      >
        {/* {this.renderContent(x)} */}
        {x.content}
      </TableCell>
    ))

  return (
    <table className='table'>
      {header && (
        <thead>
          <TableRow header={true}>
            {renderCells(header, true)}
          </TableRow>
        </thead>
      )}
      {rows.map((x, i) => (
        <TableRow key={`table-row-${i}`}>
          {renderCells(x)}
        </TableRow>
      ))}
    </table>
  )
}


export default Table
