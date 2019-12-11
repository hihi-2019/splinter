import React from 'react'
import { mount, shallow } from 'enzyme'



import {AddTransaction} from '../../../client/components/AddTransaction'

const debug = false

function debugLog(message) {
    if(debug) console.log(message)
}

const defaultProps = {
  groupMembers: [
      { groupMember_id: 16, group_id: 5, member_name: "Phil" },
      { groupMember_id: 14, group_id: 5, member_name: "Jenny" },
      { groupMember_id: 17, group_id: 6, member_name: "Not Phil" },
  ],
  activeGroup: 5
}


test('App renders routes for authed user', () => {
    const wrapper = shallow(<AddTransaction {...defaultProps}/>)
    debugLog(wrapper.debug())

    wrapper.instance().toggleTransaction()

    const actual = wrapper.state().showTransactionForm

    expect(actual).toBeTruthy()
}) 


test('handleCheck sets an error for selected payer', () => {
    const wrapper = shallow(<AddTransaction {...defaultProps}/>)
    debugLog(wrapper.debug())

    wrapper.setState({selectedPayer: []})
    
    wrapper.instance().handleCheck()

    const actual = wrapper.state().errorPayer

    expect(actual).toBeTruthy()
}) 
