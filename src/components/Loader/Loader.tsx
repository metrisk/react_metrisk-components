import ILoader from './types'
import * as React from 'react'
import cx from 'classnames'

/**
 * Styles
 */
import './Loader.scss'

/**
 * A loader
 */
const Loader = ({ type, coverPage }: any) => {
  const Wrapper = ({ children }: any) => {
    return (
      <div className={cx('loader')}>
        {children}
      </div>
    )
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
          <span
            className={cx('loader__spinner')}
            dangerouslySetInnerHTML={{ __html: require(`../../assets/icons/loader.svg`) }}
          />
        </Wrapper>
      )
  }
}

export default Loader
