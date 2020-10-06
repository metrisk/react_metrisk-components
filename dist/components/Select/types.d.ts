declare namespace ISelect {
    interface IProps {
        className?: string;
        id: string;
        searchable?: boolean;
        searchableLimit?: number;
        optional?: boolean;
        disabled?: boolean;
        placeholder?: string;
        options: {
            value: string;
            label: string;
        }[];
        value: string;
        popper: any;
        onChange: (e: any) => void;
    }
    interface IOptionsProps {
        [key: string]: any;
    }
}
export default ISelect;
