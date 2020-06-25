import IModal from './types'
import * as React from 'react'
import { createPortal } from 'react-dom'
import { useContext, useEffect, Fragment } from 'react'
import cx from 'classnames'

/**
 * Styles
 */
import './Modal.scss'

/**
 * Context
 */
import { OpenContext } from '../../context/OpenContext'

/**
 * Components
 */
import { ModalClose, ModalHeader, ModalBody, ModalFooter } from '.'
import { Overlay } from '../Overlay'

/**
 * A modal using React portal to render at the DOM body root
 */
const Modal = ({ header, footer, children }: IModal.IProps) => {
  const { open, setOpen } = useContext(OpenContext)

  useEffect(() => {
    if (open) {
      document.body.classList.add('has-modal')
    } else {
      document.body.classList.remove('has-modal')
    }
  }, [open])

  return open
    ? createPortal(
        <Fragment>
          <Overlay onClick={() => setOpen(false)} />
          <div className="modal-container">
            <aside className="modal">
              <ModalClose onClick={setOpen} />
              {header && <ModalHeader {...header} />}
              {children && <ModalBody>{children}</ModalBody>}
              {footer && <ModalFooter {...footer} />}
            </aside>
          </div>
        </Fragment>,
        document.body
      )
    : null
}

export default Modal
