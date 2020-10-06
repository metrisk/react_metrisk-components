import { CSSProperties } from 'react';
interface Props {
    index: number;
    data: {
        label: string;
        value: string;
    }[];
    style: CSSProperties;
    value: string;
    setSize: (index: number, height: number) => void;
    onBlur: () => void;
    onClick: (value: string, event: any) => void;
}
declare const VirtualisedSelectOption: ({ index, data, style, value, setSize, onBlur, onClick }: Props) => JSX.Element;
export default VirtualisedSelectOption;
