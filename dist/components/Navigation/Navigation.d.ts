/// <reference types="react" />
import INavigation from './types';
/**
 * Styles
 */
import './Navigation.scss';
/**
 * A  navigation that supports two nested levels
 */
declare const Navigation: ({ className, links, type, children }: INavigation.IProps) => JSX.Element;
export default Navigation;
