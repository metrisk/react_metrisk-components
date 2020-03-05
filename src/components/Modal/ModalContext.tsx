import { createContext } from 'react'

const ModalContext = createContext({
  ref: null,
  open: false,
  setOpen: (open: boolean) => {}
})

export default ModalContext
