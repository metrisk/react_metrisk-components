declare namespace IInput {
  interface IProps {
    className?: string
    id: string
    name?: string
    disabled?: boolean
    type: 'text' | 'date' | 'number' | 'email' | 'url' | 'tel'
    value: string
    uncontrolled: boolean
    onChange: (e: any) => void
  }
}

export default IInput
