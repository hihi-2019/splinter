import React from 'react'
import { mount, shallow } from 'enzyme'



import {App} from '../../../client/components/App'


// test('<App />', () => {
//   const expected = 'React development has begun!'
//   const wrapper = mount(<App />)
//   expect(wrapper.text()).toMatch(expected)
// })


test('is test working', function () {
  expect(1).toBeLessThan(1000)
})

// test('App renders', () => {
//   const wrapper = shallow(<App/>)
//   console.log(wrapper.html())

//   const actual = wrapper.find('div')
//   expect(actual).toHaveLength(1)
// }) 