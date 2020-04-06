import IAlert from './types'
import * as React from 'react'
/**
 * Styles
 */
import './Alert.scss'
declare const Alert: ({ type, timeout, footer, children }: IAlert.IProps) => React.ReactPortal
export default Alert
