import * as React from 'react'
import { Fragment, useState, useEffect } from 'react'
import { createNavNodes, toggleNavNode } from '../../lib'
import cx from 'classnames'
import INavigation from './types'

/**
 * Styles
 */
import './Navigation.scss'

/**
 * Components
 */
import { NavigationList, NavigationItem, NavigationLink } from '.'
import { Icon } from '../Icon'
import { Link as RouterLink } from 'react-router-dom'

/**
 * A  navigation that supports two nested levels
 */
const Navigation = ({ className, brand, links, type = 'Horizontal', inverse, children }: any) => {
  const [nodes, setNodes]: any = useState({})
  const [open, setOpen]: any = useState(false)

  const navClasses: INavigation.IClasses = {
    Horizontal: 'nav--horizontal',
    Vertical: 'nav--vertical'
  }

  /**
   * Open a nav item
   */
  const handleClick = (id: string) => {
    const newNodes = toggleNavNode(nodes, id)
    setNodes((prev: any) => ({ ...prev, ...newNodes }))
  }

  /**
   * Recursively render list items in an unordered list
   *
   * @param {Array} items
   * The array of links to process
   */
  const renderList = (items: any, state: any, depth: number) => (
    <NavigationList type={type} depth={depth} open={open}>
      {items.map((x: any) => (
        <NavigationItem key={`li-${x.text}`}>
          {x.children ? (
            <Fragment>
              <NavigationLink {...x} onClick={() => handleClick(x.text)}>
                {x.text}
              </NavigationLink>
              {state[x.text]?.open && renderList(x.children, state[x.text], state[x.text].depth)}
            </Fragment>
          ) : (
            <NavigationLink {...x}>{x.text}</NavigationLink>
          )}
        </NavigationItem>
      ))}
    </NavigationList>
  )

  /**
   * Create the nav state when component mounts
   */
  useEffect(() => {
    const items = createNavNodes(links)
    setNodes(items)
  }, [])

  return (
    <nav className={cx(className, 'nav', navClasses[type], { 'nav--inverse': inverse })}>
      <button className="nav__toggle" onClick={() => setOpen(!open)}>
        <Icon name='hamburger' />
      </button>

      {brand && (
        <RouterLink className="nav__brand" to={brand.href || '/'}>
          <img className="nav__logo" src={brand.img.src} alt={brand.img.alt} />
        </RouterLink>
      )}

      {renderList(links, nodes, 0)}
      {children}
    </nav>
  )
}

export default Navigation
