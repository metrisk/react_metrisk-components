declare namespace ICheckbox {
  interface IProps {
    className?: string
    id?: string
    name?: string
    value?: boolean
    disabled?: boolean
    uncontrolled?: boolean
    state?: string
    children?: any
    onChange?: (value: boolean) => void
  }
}

export default ICheckbox
