import * as React from 'react'

// Components
import { Input } from '../Input'
import { Checkbox } from '../Checkbox'
import { Radio } from '../Radio'
import { Select } from '../Select'

const FieldPicker = ({ name, value, type, options, onChange }: any) => {
  switch (type) {
    case 'select':
      return <Select name={name} options={options} value={value} onChange={onChange} />
    case 'checkbox':
      return <Checkbox name={name} value={value} onChange={onChange} />
    case 'upload':
      return <Radio name={name} value={value} onChange={onChange} />
    default:
      return <Input name={name} type={type} value={value} onChange={onChange} />
  }
}

export default FieldPicker
