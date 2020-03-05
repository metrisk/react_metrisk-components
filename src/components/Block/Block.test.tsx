import 'jsdom-global/register'
import * as React from 'react'
import * as Adapter from 'enzyme-adapter-react-16'
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
import { Block } from './'

describe('----- Block Component -----', () => {
  it('Renders the correct HTML', () => {
    const block = shallow(<Block type={'Fill'}>Block</Block>)
    expect(block.html()).to.equal('<div class="block block--fill">Block</div>')
  })
})