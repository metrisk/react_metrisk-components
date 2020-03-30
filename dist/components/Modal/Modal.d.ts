import IModal from './types';
import * as React from 'react';
/**
 * Styles
 */
import './Modal.scss';
/**
 * A modal using React portal to render at the DOM body root
 */
declare const Modal: ({ header, footer, children }: IModal.IProps) => React.ReactPortal;
export default Modal;
