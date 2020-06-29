declare namespace IInput {
    interface IProps {
        className?: string;
        id: string;
        name?: string;
        disabled?: boolean;
        type: 'text' | 'date' | 'number' | 'email' | 'url' | 'tel';
        value: string;
        placeholder: string;
        autoComplete?: 'on' | 'off';
        uncontrolled?: boolean;
        onChange: (e: any) => void;
    }
}
export default IInput;
