/// <reference types="react" />
import IInput from './types';
/**
 * Styles
 */
import './Input.scss';
/**
 * A user input
 */
declare const Input: ({ className, id, name, type, value, autoComplete, onChange, uncontrolled, ...props }: IInput.IProps) => JSX.Element;
export default Input;
