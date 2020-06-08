declare namespace IImage {
  interface IProps {
    className?: string
    type?: 'Rounded' | 'Round' | 'Diamond'
    aspect: '1x1' | '4x3' | '16x9' | '7x3'
    src: string
    alt: string
    fallback: any
  }
}

export default IImage
