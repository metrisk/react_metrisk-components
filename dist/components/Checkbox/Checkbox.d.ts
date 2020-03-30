/// <reference types="react" />
import ICheckbox from './types';
/**
 * Styles
 */
import './Checkbox.scss';
/**
 * A checkbox
 */
declare const Checkbox: ({ className, id, name, value, onChange }: ICheckbox.IProps) => JSX.Element;
export default Checkbox;
