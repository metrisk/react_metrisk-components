/// <reference types="react" />
import IRadio from './types';
/**
 * Styles
 */
import './Radio.scss';
/**
 * A Radio button
 */
declare const Radio: ({ className, id, name, value, uncontrolled, state, onChange, children, ...props }: IRadio.IProps) => JSX.Element;
export default Radio;
