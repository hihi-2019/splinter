import React from 'react'
import { mount, shallow } from 'enzyme'



import {App} from '../../../client/components/App'


const defaultAuthedProps = {
  auth: { 
    isAuthenticated: true, 
    user: { 
      user_id: 1 
    }
  },
}

const defaultUnauthedProps = {
  auth: { 
    isAuthenticated: false, 
  },
}

// test('<App />', () => {
//   const expected = 'React development has begun!'
//   const wrapper = mount(<App />)
//   expect(wrapper.text()).toMatch(expected)
// })


test('is test working', function () {
  expect(1).toBeLessThan(1000)
})

test('App renders routes for authed user', () => {
const mockDispatch = jest.fn()

const wrapper = shallow(<App {...defaultAuthedProps} dispatch={mockDispatch}/>)
  // console.log(wrapper.debug())

  const actual = wrapper.find('Route')
  expect(actual).toHaveLength(1)

  expect(mockDispatch.mock.calls).toHaveLength(1)
}) 

test('App renders routes for unauthed user', () => {
  const mockDispatch = jest.fn()

  const wrapper = shallow(<App {...defaultUnauthedProps} dispatch={mockDispatch}/>)
  // console.log(wrapper.debug())

  const actual = wrapper.find('Route')
  expect(actual).toHaveLength(3)

  expect(mockDispatch.mock.calls).toHaveLength(0)
}) 
