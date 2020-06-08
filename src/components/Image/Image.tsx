import IImage from './types'
import * as React from 'react'
import { Suspense, useState } from 'react'
import { createResource, SimpleCache } from 'simple-cache-provider'
import cx from 'classnames'

/**
 * Styles
 */
import './Image.scss'

/**
 * Components
 */
import { Loader } from '../Loader'

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

const secondsUntilFail = 15

const Fallback = ({ alt }: { alt: string }) => {
  const [error, setError] = useState(false)
  setTimeout(() => setError(true), secondsUntilFail * 1000)

  if (error) {
    return (
      <div className="img__error">
        <div aria-hidden={true}>?</div>
        <span>{alt}</span>
      </div>
    )
  }

  return (
    <span className={'img__loader'}>
      <Loader type="Circle" />
    </span>
  )
}

/**
 * My component
 */
const Image = ({ className, type, aspect, src, alt, fallback }: IImage.IProps) => {
  const resource = createResource(
    (source: string) =>
      new Promise((resolve) => {
        const img = new window.Image()
        img.src = source
        img.onload = () => setTimeout(() => resolve(source), 0)
      })
  )

  return (
    <Suspense fallback={fallback || <Fallback alt={alt} />}>
      <SimpleCache.Consumer>
        {(cache: any) => {
          const data: any = resource.read(cache, src)

          return (
            <picture className={cx(className, 'img', types[type], aspects[aspect])}>
              <source media="(min-width: 500px)" srcSet={data} />
              <img className={'img__item'} src={data} alt={alt} />
            </picture>
          )
        }}
      </SimpleCache.Consumer>
    </Suspense>
  )
}

export default Image
