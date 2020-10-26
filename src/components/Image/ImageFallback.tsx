import * as React from 'react'
import { useEffect, useState } from 'react'

import { Loader } from '../Loader'

const secondsUntilFail = 15

const ImageFallback = ({ alt }: { alt: string }) => {
  const [error, setError] = useState(false)
  const safeAlt = typeof alt === 'string' ? alt : null

  useEffect(() => {
    const failTimeout = setTimeout(() => setError(true), secondsUntilFail * 1000)

    return () => clearTimeout(failTimeout)
  }, [])

  if (error) {
    return (
      <div className="img__error">
        <div aria-hidden={true}>?</div>
        <span>{safeAlt}</span>
      </div>
    )
  }

  return (
    <span className={'img__loader'}>
      <Loader type="Circle" />
    </span>
  )
}

export default React.memo(ImageFallback, (prevProps, nextProps) => prevProps.alt !== nextProps.alt)
