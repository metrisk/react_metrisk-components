import { createContext } from 'react'

const AlertContext = createContext({
  open: false,
  setOpen: (open: boolean) => {},
})

export default AlertContext
