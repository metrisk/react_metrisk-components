import 'jsdom-global/register'
import * as React from 'react'
import * as Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import { expect } from 'chai'
import { configure, shallow } from 'enzyme'
import register from 'ignore-styles'

// /**
//  * Setup
//  */
// register(['.scss'])
// configure({ adapter: new Adapter() })

// /**
//  * Components
//  */
// import { Box } from '.'

// describe('----- Box Component -----', () => {
//   it('Renders the correct HTML', () => {
//     const htmlA = shallow(<Box>Box</Box>)
//     expect(htmlA.html()).to.equal('<div class="box">Box</div>')
//   })
// })