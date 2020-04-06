/// <reference types="react" />
import ILink from './types'
/**
 * Styles
 */
import './Link.scss'
/**
 * A simple link using React Router
 */
declare const Link: ({ className, type, href, target, external, icon, children }: ILink.IProps) => JSX.Element
export default Link
