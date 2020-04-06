import ITooltip from './types';
import * as React from 'react';
/**
 * Styles
 */
import './Tooltip.scss';
/**
 * A tooltip
 */
declare const Tooltip: ({ attachTo, trigger, align, children }: ITooltip.IProps) => React.ReactPortal;
export default Tooltip;
