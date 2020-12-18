import * as React from 'react'

/**
 * Components
 */
import { Input } from '../Input'
import { Checkbox } from '../Checkbox'
import { Radio } from '../Radio'
import { Select } from '../Select'
import { Textarea } from '@components/Textarea'

/**
 * Field picker
 */
const FieldPicker = ({ type, label, render, ...props }: any) => {
  if (React.isValidElement(type)) {
    return type
  }

  const renderLabel = () => {
    if (React.isValidElement(label)) return label

    return `${label}${props.required ? ' *' : ''}`
  }

  switch (type) {
    case 'select':
      return <Select {...props} />
    case 'checkbox':
      return <Checkbox {...props}>{renderLabel()}</Checkbox>
    case 'radio':
      return <Radio {...props}>{renderLabel()}</Radio>
    case 'textarea':
      return <Textarea {...props}>{renderLabel()}</Textarea>
    default:
      return <Input type={type} {...props} />
  }
}

export default FieldPicker
