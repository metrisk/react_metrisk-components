import * as React from 'react'
import { useState, useEffect, useRef } from 'react'
import cx from 'classnames'

/**
 * Components
 */
import Fallback from './ImageFallback'

import IImage from './types'

/**
 * Styles
 */
import './Image.scss'

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
  const [error, setError] = useState(false)
  const loadingSource: any = useRef(null)
  const [source, setSource] = useState(null)

  useEffect(() => {
    if (src) {
      if (!source) {
        loadingSource.current = null
        setSource(null)
      }

      const img = new window.Image()
      img.src = src
      img.onload = () => {
        if (loadingSource.current.src === src) setSource(src)
      }
      img.onerror = () => setError(true)
      loadingSource.current = img
    }
  }, [src])

  const renderImage = () => {
    return (
      <picture>
        <source media="(min-width: 500px)" srcSet={source} />
        <img className={'img__item'} src={source} alt={alt} />
      </picture>
    )
  }

  return (
    <div className={cx(className, 'img', types[type], aspects[aspect], background && 'img--background')}>
      {error || !source ? <Fallback /> : renderImage()}
    </div>
  )
}

export default Image
