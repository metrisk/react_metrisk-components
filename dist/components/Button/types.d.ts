/// <reference types="react" />
declare namespace IButton {
  interface IProps {
    className?: string
    href?: string
    type: 'Primary' | 'Secondary' | 'Tertiary' | 'Action'
    icon?: {
      name: string
      align: 'Left' | 'Center' | 'Right'
    }
    submit?: boolean
    disabled?: boolean
    children: any
    onClick?: (e: React.SyntheticEvent) => void
  }
}
export default IButton
