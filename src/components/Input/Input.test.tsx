import 'jsdom-global/register'
import * as React from 'react'
import * as Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import { expect } from 'chai'
import { configure, shallow } from 'enzyme'
import register from 'ignore-styles'

/**
 * Setup
 */
register(['.scss'])
configure({ adapter: new Adapter() })

/**
 * Components
 */
import { Input } from './'

describe('----- Input Component -----', () => {
  it('Renders the correct HTML', () => {
    // const htmlA = shallow(<Input type={'Primary'} />)
    // expect(htmlA.html()).to.equal('<div class="input input--primary">Input</div>')
  })
})