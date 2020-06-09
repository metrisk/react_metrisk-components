declare namespace ICheckbox {
    interface IProps {
        className?: string;
        id: string;
        name?: string;
        value?: boolean;
        uncontrolled?: boolean;
        children?: any;
        onChange: (value: boolean) => void;
    }
}
export default ICheckbox;
