import * as React from 'react'
import cx from 'classnames'

// Componentts
import { Icon } from '../Icon'

const ModalClose = ({ onClick }: any) => (
  <button className={cx('modal__close')} onClick={() => onClick(false)}>
    Close
    <Icon name={'cross'} size={'Large'} />
  </button>
)

export default ModalClose
