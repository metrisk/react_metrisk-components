import * as React from 'react'
import { createPortal } from 'react-dom'
import { useContext, useEffect } from 'react'
import cx from 'classnames'
import IAlert from './types'

// Context
import { AlertContext } from '.'

// Components
import { AlertClose, AlertBody, AlertFooter } from '.'
import { Icon } from '../Icon'

// Styles
import './Alert.scss'

const alertClasses: any = {
  Error: 'alert--error',
  Warning: 'alert--warning',
  Success: 'alert--success'
}

const alertIcons: any = {
  Success: 'tick',
  Warning: 'exclamation',
  Error: 'exclamation',
  Info: 'info'
}

const Alert = ({ type = 'Info', timeout, footer, children }: any) => {
  const { setOpen } = useContext(AlertContext)

  useEffect(() => {
    if (!open || !timeout) return
    setTimeout(() => setOpen(false), timeout)
  }, [open])

  return createPortal(
    <aside className={cx('alert', alertClasses[type])}>
      <AlertClose onClick={setOpen} />
      <Icon className={cx('alert__icn')} name={alertIcons[type]} colour={type} />
      {children && <AlertBody>{children}</AlertBody>}
      {footer && <AlertFooter {...footer} />}
    </aside>,
    document.body
  )
}

export default Alert
