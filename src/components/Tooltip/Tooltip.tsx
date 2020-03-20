import * as React from 'react'
import { createPortal } from 'react-dom'
import { useContext, useEffect, useState, useRef } from 'react'
import cx from 'classnames'
import ITooltip from './types'

// Components
import { Text } from '../Text'

// Styles
import './Tooltip.scss'

const Tooltip = ({ attachTo, trigger = 'hover', align = 'left', children }: any) => {
  const ref: any = useRef()
  const [open, setOpen] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const getPosition = () => {
    if (!attachTo) return
    if (!ref.current) return

    const tooltipRect = ref.current.getBoundingClientRect()
    const attachRect = attachTo.getBoundingClientRect()
  
    let x = 0
    let y = 0
  
    switch (align) {
      case 'left':
        x = attachRect.left - tooltipRect.width
        y = attachRect.top + attachTo.clientHeight / 2
        break
      case 'right':
        x = attachRect.right
        y = attachRect.top + attachTo.clientHeight / 2
        break
      case 'top':
        x = attachRect.left + attachTo.clientWidth / 2
        y = attachRect.top - tooltipRect.height
        break
      case 'bottom':
        x = attachRect.left + attachTo.clientWidth / 2
        y = attachRect.bottom
        break
    }
      
    setPosition({ x, y })
  }

  const handleEvent = () => {
    getPosition()
    setOpen((prev: boolean) => !prev)
  }
  
  useEffect(() => {
    if (!attachTo) return
    if (!ref.current) return
    
    if (trigger === 'hover') {
      attachTo.addEventListener('mouseenter', handleEvent)
      attachTo.addEventListener('mouseleave', handleEvent)
    } else {
      attachTo.addEventListener(trigger, handleEvent)
    }
  }, [attachTo])

  return createPortal(
    <aside 
      ref={ref} 
      className={cx('tooltip', { [`tooltip--${align}`]: open})} 
      style={{ 
        visibility: open ? 'visible' : 'hidden', 
        left: `${position.x}px`, 
        top: `${position.y}px`
      }}
    >
      {children}
    </aside>,
    document.body
  )
}

export default Tooltip
