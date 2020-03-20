import * as React from 'react'
import { Fragment, useRef, useState, useEffect } from 'react'

// Context
import { AlertContext } from '.'

const AlertProvider = ({ children }: any) => {
  const [open, setOpen] = useState(false)

  return (
    <AlertContext.Provider value={{ open, setOpen }}>
      {children}
    </AlertContext.Provider>
  )
}

export default AlertProvider
