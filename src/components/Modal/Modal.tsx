import IModal from './types'
import * as React from 'react'
import { createPortal } from 'react-dom'
import { useContext, useEffect, Fragment } from 'react'
import * as FocusTrap from 'focus-trap-react'

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

  useEffect(() => {
    return () => document.body.classList.remove('has-modal')
  }, [])

  return open
    ? createPortal(
        <Fragment>
          <Overlay />
          <div className="modal-container">
            <FocusTrap>
              <aside className="modal" aria-modal="true" tabIndex={-1} role="dialog">
                <ModalClose onClick={setOpen} />
                {header && <ModalHeader {...header} />}
                {children && <ModalBody>{children}</ModalBody>}
                {footer && <ModalFooter {...footer} />}
              </aside>
            </FocusTrap>
          </div>
        </Fragment>,
        document.body
      )
    : null
}

export default Modal
