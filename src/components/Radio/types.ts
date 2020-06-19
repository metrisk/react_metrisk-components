declare namespace IRadio {
  interface IProps {
    className?: string
    id: string
    name?: string
    value?: boolean
    uncontrolled?: boolean
    state?: string
    onChange: (value: boolean) => void
    children: any
  }
}

export default IRadio
