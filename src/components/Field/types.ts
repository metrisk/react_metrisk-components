declare namespace IField {
  interface IProps {
    className?: string
    id: string
    name?: string
    type?: any
    value?: any
    disabled?: boolean
    readOnly?: boolean
    required?: boolean
    label?: string
    placeholder?: string
    state?: 'Success' | 'Warning' | 'Error'
    msg?: string
    inline?: false
    children?: any
    displayMsg?: boolean
    fullWidth?: boolean
    options?: any[]
    searchable?: boolean
    searchableLimit?: number
    onChange?: (value: string) => void
  }
}

export default IField
