/// <reference types="react" />
import ISelect from './types';
/**
 * Render a filtered list or the original list of options
 */
declare const SelectOptions: ({ open, options, optional, value, searchable, limited, handleClick, handleBlur, }: ISelect.IOptionsProps) => JSX.Element;
export default SelectOptions;
