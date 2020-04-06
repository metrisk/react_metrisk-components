declare namespace IField {
  interface IProps {
    className?: string
    id: string
    name?: string
    type?: any
    value?: any
    disabled?: boolean
    label?: string
    state?: 'Success' | 'Warning' | 'Error'
    msg?: string
    children?: any
    onChange?: () => void
  }
}
export default IField
