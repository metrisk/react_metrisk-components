/// <reference types="react" />
import ITextarea from './types'
/**
 * Styles
 */
import './Textarea.scss'
/**
 * My component
 */
declare const Textarea: ({ className, id, name, value, onChange }: ITextarea.IProps) => JSX.Element
export default Textarea
