/// <reference types="react" />
declare namespace IButton {
    interface IProps {
        className?: string;
        href?: string;
        type: 'Primary' | 'Secondary' | 'Tertiary' | 'Action';
        icon?: {
            name: string;
            position?: 'Left' | 'Right' | 'Center';
        };
        submit?: boolean;
        children: any;
        onClick?: (e: React.SyntheticEvent) => void;
    }
    interface IClasses {
        [key: string]: 'btn--primary' | 'btn--secondary' | 'btn--tertiary' | 'btn--action';
    }
    interface IIconClasses {
        [key: string]: 'btn__icn--l' | 'btn__icn--r' | 'btn__icn--c';
    }
}
export default IButton;
