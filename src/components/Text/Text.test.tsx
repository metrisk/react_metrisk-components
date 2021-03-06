import 'jsdom-global/register'
import * as React from 'react'
import * as Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import * as sinon from 'sinon'
import { expect } from 'chai'
import { configure, shallow, mount } from 'enzyme'
import register from 'ignore-styles'

/**
 * Setup
 */
register(['.scss'])
configure({ adapter: new Adapter() })

/**
 * Components
 */
import { Text } from '.'

describe('----- Page Component -----', () => {
  // const page = shallow(<Page config={{ title: 'Test Page '}} />)

  // it('Renders <div>', () => {
  //   expect(page.find(Foo)).to.have.lengthOf(3);
  // })
})