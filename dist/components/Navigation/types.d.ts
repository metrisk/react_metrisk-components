declare namespace Navigation {
  interface IProps {
    className?: string
    links: any
    type?: 'Horizontal' | 'Vertical'
    inverse?: boolean
    children?: any
  }
  interface IClasses {
    [key: string]: 'nav--horizontal' | 'nav--vertical'
  }
  interface IListProps {
    [key: string]: any
  }
  interface IItemProps {
    [key: string]: any
  }
  interface ILinkProps {
    [key: string]: any
  }
}
export default Navigation
