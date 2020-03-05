declare namespace Navigation {
    interface IProps {
        className?: string;
        links: any;
        type?: 'Horizontal' | 'Vertical';
        children?: any;
    }
    interface IClasses {
        [key: string]: 'nav--v';
    }
    interface IListProps {
        [key: string]: any;
    }
    interface IListClasses {
        [key: string]: 'nav__list--v';
    }
    interface IItemProps {
        [key: string]: any;
    }
    interface IItemClasses {
        [key: string]: 'nav__item--v';
    }
    interface ILinkProps {
        [key: string]: any;
    }
    interface ILinkClasses {
        [key: string]: 'nav__link--v';
    }
}
export default Navigation;
