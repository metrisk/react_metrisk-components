import * as React from 'react'
import { Fragment, useRef, useState, useEffect } from 'react'

// Context
import { ModalContext } from './index'

const ModalProvider = ({ children }: any) => {
  const modalRef = useRef()
  const [ref, setRef] = useState()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setRef(modalRef.current)
  }, [])

  return (
    <Fragment>
      <ModalContext.Provider value={{ ref, open, setOpen }}>{children}</ModalContext.Provider>
      <div ref={modalRef} />
    </Fragment>
  )
}

export default ModalProvider
