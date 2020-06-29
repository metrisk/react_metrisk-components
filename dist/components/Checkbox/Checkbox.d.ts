/// <reference types="react" />
import ICheckbox from './types';
/**
 * Styles
 */
import './Checkbox.scss';
declare const Checkbox: ({ className, id, name, value, uncontrolled, state, children, onChange, ...props }: ICheckbox.IProps) => JSX.Element;
export default Checkbox;
