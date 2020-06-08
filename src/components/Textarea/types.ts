declare namespace ITextarea {
  interface IProps {
    className?: string
    id: string
    name?: string
    value: string
    uncontrolled: boolean
    onChange: (e: any) => void
  }
}

export default ITextarea
