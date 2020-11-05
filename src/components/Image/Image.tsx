import IImage from './types'
import * as React from 'react'
import { createResource, SimpleCache } from 'simple-cache-provider'
import cx from 'classnames'

import { canUseDOM } from '../../lib/canUseDOM'

/**
 * Styles
 */
import './Image.scss'

/**
 * Components
 */
import SsrSuspense from './SsrSuspense'
import Fallback from './ImageFallback'

/**
 * Image classes
 */
const types = {
  Rounded: 'img--rounded',
  Round: 'img--round',
  Diamond: 'img--diamond'
}

/**
 * Image aspects
 */
const aspects = {
  '1x1': 'img--1x1',
  '4x3': 'img--4x3',
  '16x9': 'img--16x9',
  '7x3': 'img--7x3'
}

const Image = ({ className, type, aspect, src, alt, fallback = null, background = true }: IImage.IProps) => {
  const resource = createResource((source: string) => {
    // Rather than trying to load a null or undefined source return an empty promise as there is probably a delay in receiving the true source
    if (!source) return new Promise(() => null)
    return new Promise((resolve) => {
      const img = new window.Image()
      img.src = source
      img.onload = () => setTimeout(() => resolve(source), 0)
    })
  })

  const renderSuspense = (source: string) => {
    return (
      <SsrSuspense fallback={fallback || <Fallback alt={alt} />}>
        <SimpleCache.Consumer>
          {(cache: any) => {
            const data: any = resource.read(cache, source)

            return renderImage(data)
          }}
        </SimpleCache.Consumer>
      </SsrSuspense>
    )
  }

  const renderImage = (source: string) => {
    return (
      <picture>
        <source media="(min-width: 500px)" srcSet={source} />
        <img className={'img__item'} src={source} alt={alt} />
      </picture>
    )
  }

  return (
    <div className={cx(className, 'img', types[type], aspects[aspect], background && 'img--background')}>
      {canUseDOM ? renderSuspense(src) : renderImage(src)}
    </div>
  )
}

export default React.memo(Image, (prevProps, nextProps) => prevProps.src === nextProps.src)
