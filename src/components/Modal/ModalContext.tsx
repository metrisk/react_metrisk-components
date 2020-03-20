import { createContext } from 'react'

const ModalContext = createContext({
  open: false,
  setOpen: (open: boolean) => {}
})

export default ModalContext
