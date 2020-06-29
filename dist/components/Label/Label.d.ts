/// <reference types="react" />
import ILabel from './types';
/**
 * Styles
 */
import './Label.scss';
/**
 * A label
 */
declare const Label: ({ className, for: htmlFor, control, children }: ILabel.IProps) => JSX.Element;
export default Label;
