declare namespace ITable {
  interface IProps {
    className?: string
    header?: { 
      content: string
      sortable: true
    }[]
    rows: [{ content: string }][]
    children: any
  }
}

export default ITable
