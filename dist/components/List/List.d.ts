/// <reference types="react" />
import IList from './types';
/**
 * Styles
 */
import './List.scss';
/**
 * List of items
 */
declare const List: ({ className, items }: IList.IProps) => JSX.Element;
export default List;
