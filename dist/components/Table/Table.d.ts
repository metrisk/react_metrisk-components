/// <reference types="react" />
import ITable from './types';
/**
 * Styles
 */
import './Table.scss';
/**
 * My component
 */
declare const Table: ({ className, header, rows }: ITable.IProps) => JSX.Element;
export default Table;
