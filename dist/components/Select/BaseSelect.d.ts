/// <reference types="react" />
import ISelect from './types';
import './Select.scss';
declare const BaseSelect: ({ name, value, state, options, optional, onChange }: ISelect.IProps) => JSX.Element;
export default BaseSelect;
