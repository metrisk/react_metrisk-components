/// <reference types="react" />
import IImage from './types';
/**
 * Styles
 */
import './Image.scss';
/**
 * My component
 */
declare const Image: ({ className, type, aspect, src, alt, fallback, background }: IImage.IProps) => JSX.Element;
export default Image;
