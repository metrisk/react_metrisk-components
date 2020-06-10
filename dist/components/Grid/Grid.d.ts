/// <reference types="react" />
import IGrid from './types';
/**
 * Styles
 */
import './Grid.scss';
/**
 * A grid system using CSS Grid
 */
declare const Grid: ({ className, gutter, align, children }: IGrid.IProps) => JSX.Element;
export default Grid;
