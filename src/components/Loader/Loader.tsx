import * as React from 'react'
import cx from 'classnames'

/**
 * Styles
 */
import './Loader.scss'

const Loader = ({ type }: any) => {
  const Wrapper = ({ children }: any) => {
    return <div className={cx('loader')}>{children}</div>
  }

  switch (type) {
    case 'Bounce':
      return (
        <Wrapper>
          <span className={cx('loader__bounce')}></span>
          <span className={cx('loader__bounce')}></span>
          <span className={cx('loader__bounce')}></span>
        </Wrapper>
      )
    default:
      return (
        <Wrapper>
          <svg className="loader__spinner" viewBox="0 0 50 50">
            <circle className="loader__spinner-path" cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
          </svg>
        </Wrapper>
      )
  }
}

export default React.memo(Loader, (prevProps, nextProps) => prevProps.type === nextProps.type)
