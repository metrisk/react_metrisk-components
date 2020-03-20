import * as React from 'react'
import cx from 'classnames'
import ISelect from './types'

// Components
import BaseSelect from './BaseSelect'
import SearchSelect from './SearchSelect'

// Styles
import './Select.scss'

const Select = ({ searchable, ...other }: ISelect.IProps) =>
  searchable ? <SearchSelect {...other} /> : <BaseSelect {...other} />

export default Select
