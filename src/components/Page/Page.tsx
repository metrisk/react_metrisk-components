import IPage from './types'
import * as React from 'react'
import { Fragment } from 'react'
import * as cx from 'classnames'
import { excludeFromObj } from '../../lib/excludeFromObj'

/**
 * Styles
 */
import './Page.scss'

/**
 * A simple page wrapper
 */
const Page = ({ className, config, data, children }: IPage.IProps) => {
  const Component: React.FC<IPage.IProps> = config.view

  return (
    <Fragment>
      <Component config={excludeFromObj(config, ['view', 'content'])} content={config.content} data={data} />
      {children}
    </Fragment>
  )
}

export default Page
