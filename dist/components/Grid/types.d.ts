/// <reference types="react" />
declare namespace Grid {
    interface IProps {
        className?: string;
        align?: {
            x: 'Left' | 'Center' | 'Right';
            y: 'Top' | 'Center' | 'Bottom';
        };
        gutter?: boolean;
        matchHeights?: boolean;
        children: React.ReactElement<IItemProps> | React.ReactElement<IItemProps>[];
    }
    interface IItemProps {
        className?: string;
        span?: any;
        align?: {
            x: 'Left' | 'Center' | 'Right';
            y: 'Top' | 'Center' | 'Bottom';
        };
        children: React.ReactNode | React.ReactNode[];
    }
    interface IAlignXClasses {
        [key: string]: 'grid--left' | 'grid--right' | 'grid--center-x';
    }
    interface IAlignYClasses {
        [key: string]: 'grid--top' | 'grid--bottom' | 'grid--center-y';
    }
}
export default Grid;
