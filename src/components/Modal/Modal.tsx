import * as React from 'react'
import { createPortal } from 'react-dom'
import { useContext } from 'react'
import cx from 'classnames'
import IModal from './types'

// Components
import { ModalContext } from '.'

// Components
import { ModalClose, ModalHeader, ModalBody, ModalFooter } from '.'

// Styles
import './Modal.scss'

const Modal = ({ header, footer, children }: any) => {
  const { setOpen } = useContext(ModalContext)

  return createPortal(
    <aside className={cx('modal')}>
      <div className={cx('modal__dialog')}>
        <ModalClose onClick={setOpen} />
        {header && <ModalHeader {...header} />}
        {children && <ModalBody>{children}</ModalBody>}
        {footer && <ModalFooter {...footer} />}
      </div>
    </aside>,
    document.body
  )
}

export default Modal
