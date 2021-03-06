/// <reference types="react" />
import ISelect from './types';
/**
 * Render a filtered list or the original list of options
 */
declare const SelectOptions: ({ open, options, optional, value, searchable, estimatedItemSize, handleClick, handleBlur }: ISelect.IOptionsProps) => JSX.Element;
export default SelectOptions;
