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

/**
 * A  navigation that supports two nested levels
 */
const Navigation = ({ className, links, type, children }: INavigation.IProps) => {
  const [nodes, setNodes]: any = useState({})

  const navClasses: INavigation.IClasses = {
    Vertical: 'nav--v'
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
    <NavigationList type={type} depth={depth}>
      {items.map((x: any) => (
        <NavigationItem key={`li-${x.text}`} type={type}>
          {x.children ? (
            <Fragment>
              <NavigationLink type={type} onClick={() => handleClick(x.text)}>
                {x.text}
              </NavigationLink>
              {state[x.text] && state[x.text].open && renderList(x.children, state[x.text], state[x.text].depth)}
            </Fragment>
          ) : (
            <NavigationLink type={type} href={x.href} icon={x.icon}>
              {x.text}
            </NavigationLink>
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
    <nav className={cx(className, 'nav', navClasses[type])}>
      {renderList(links, nodes, 0)}
      {children}
    </nav>
  )
}

export default Navigation
