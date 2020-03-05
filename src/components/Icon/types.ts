declare namespace IIcon {
  interface IProps {
    className?: string
    name: string
    size?: 'XSmall' | 'Small' | 'Large' | ''
    colour?: 'Dark' | 'Light' | 'Success' | 'Warning' | 'Error' | 'Info' | ''
  }

  interface ISizeClasses {
    [key: string]: 'icn--xs' | 'icn--sm' | 'icn--lg'
  }

  interface IColourClasses {
    [key: string]: 'icn--dark' | 'icn--light' | 'icn--success' | 'icn--warning' | 'icn--error'
  }
}

export default IIcon
