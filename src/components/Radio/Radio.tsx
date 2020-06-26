import IRadio from './types'
import * as React from 'react'
import cx from 'classnames'

/**
 * Styles
 */
import './Radio.scss'

/**
 * Components
 */
import { Label } from '../Label'
import { Icon } from '../Icon'

/**
 * A Radio button
 */
const Radio = ({ className, id, name, value, uncontrolled, state, onChange, children, ...props }: IRadio.IProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event.target.checked)
    }
  }

  const renderLabel = () => {
    if (children) {
      return <span className={cx('radio__label', state === 'Error' && 'radio__label--error')}>{children}</span>
    }

    return null
  }

  const renderRadio = () => (
    <span className={cx('radio', { 'radio--disabled': props.disabled })}>
      <input
        className={cx('radio__input')}
        id={id}
        name={name}
        type={'radio'}
        checked={value || (uncontrolled ? undefined : false)}
        onChange={handleChange}
        {...props}
      />
      <span className="radio__button">
        <Icon
          className={cx('radio__icn', { 'radio__icn--checked': value })}
          name={'tick'}
          colour={'Light'}
          size={'Small'}
        />
      </span>
      <span className="radio__focus"></span>
    </span>
  )

  if (children) {
    return (
      <Label className={cx({ 'label--disabled': props.disabled })} control>
        {renderRadio()}
        {renderLabel()}
      </Label>
    )
  }

  return renderRadio()
}

export default Radio
