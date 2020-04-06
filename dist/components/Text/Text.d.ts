/// <reference types="react" />
import IText from './types';
/**
 * Styles
 */
import './Text.scss';
/**
 * A text component
 */
declare const Text: ({ className, type, tag, align, children }: IText.IProps) => JSX.Element;
export default Text;
