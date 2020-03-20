import * as React from 'react'

// Components
import { Input } from '../Input'
import { Checkbox } from '../Checkbox'
import { Radio } from '../Radio'
import { Select } from '../Select'

const FieldPicker = ({ type, render, ...other }: any) => {
  if (typeof type === 'object') {
    return type
  }
  switch (type) {
    case 'select':
      return <Select {...other} />
    case 'checkbox':
      return <Checkbox {...other} />
    case 'radio':
      return <Radio {...other} />
    default:
      return <Input type={type} {...other} />
  }
}

export default FieldPicker
