/// <reference types="react" />
import IOverlay from './types';
/**
 * Styles
 */
import './Overlay.scss';
/**
 * An overlay
 */
declare const Overlay: ({ className, type, onClick }: IOverlay.IProps) => JSX.Element;
export default Overlay;
