declare namespace IField {
    interface IProps {
        className?: string;
        id: string;
        name?: string;
        type?: any;
        value?: any;
        disabled?: boolean;
        required?: boolean;
        label?: string;
        state?: 'Success' | 'Warning' | 'Error';
        msg?: string;
        inline?: false;
        children?: any;
        displayMsg?: boolean;
        fullWidth?: boolean;
        onChange?: () => void;
    }
}
export default IField;
