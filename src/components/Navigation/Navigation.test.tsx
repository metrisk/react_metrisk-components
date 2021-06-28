import 'jsdom-global/register'
import * as React from 'react'
import { MemoryRouter } from 'react-router-dom'
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
import { Navigation } from '.'

// describe('----- Navigation Component -----', () => {
//   it('Renders the correct HTML', () => {
    
//   })
// })