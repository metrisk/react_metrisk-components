/// <reference types="react" />
import INavigation from './types'
/**
 * The unordered list to render within the  navigation
 */
declare const NavigationList: ({ className, depth, open, children }: INavigation.IListProps) => JSX.Element
export default NavigationList
