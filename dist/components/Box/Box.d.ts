/// <reference types="react" />
import IBox from './types';
/**
 * Styles
 */
import './Box.scss';
import '../../index.scss';
/**
 * My component
 */
declare const Box: ({ className, align, children }: IBox.IProps) => JSX.Element;
export default Box;
