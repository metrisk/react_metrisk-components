declare namespace IGrid {
  interface IProps {
    className?: string
    gutter?: boolean
    align?: {
      x?: 'Start' | 'Center' | 'End'
      y?: 'Start' | 'Center' | 'End'
    }
    children: React.ReactElement<IItemProps> | React.ReactElement<IItemProps>[]
  }

  interface IItemProps {
    className?: string
    span?: number
    align?: {
      x?: 'Start' | 'Center' | 'End'
      y?: 'Start' | 'Center' | 'End'
    }
    children: React.ReactNode | React.ReactNode[]
  }
}

export default IGrid
