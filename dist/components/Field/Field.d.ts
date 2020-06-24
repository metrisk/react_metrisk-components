/// <reference types="react" />
import IField from './types';
/**
 * Styles
 */
import './Field.scss';
/**
 * Field wrapper component
 */
declare const Field: ({ className, state, msg, displayMsg, fullWidth, ...props }: IField.IProps) => JSX.Element;
export default Field;
