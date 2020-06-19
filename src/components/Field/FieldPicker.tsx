import * as React from 'react'

/**
 * Components
 */
import { Input } from '../Input'
import { Checkbox } from '../Checkbox'
import { Radio } from '../Radio'
import { Select } from '../Select'

/**
 * Field picker
 */
const FieldPicker = ({ type, label, render, ...props }: any) => {
  if (React.isValidElement(type)) {
    return type
  }

  switch (type) {
    case 'select':
      return <Select {...props} />
    case 'checkbox':
      return <Checkbox {...props}>{label}</Checkbox>
    case 'radio':
      return <Radio {...props} />
    default:
      return <Input type={type} {...props} />
  }
}

export default FieldPicker
