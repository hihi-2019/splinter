import React from 'react'

import AddTransaction from '../components/AddTransaction'
import ViewTransactions from '../components/ViewTransactions'


class ActiveGroup extends React.Component {
  constructor(props) {
    super(props) 
    this.state={}    
  }

  render() {
    return (
      <>
        <h1>Name of Group</h1>
        <h3>List of Group Members</h3>
          <ul>
            <li>
              MemberName MemberBalance $00.00 
            </li>
          </ul>
          
        < AddTransaction />

        <ViewTransactions />

        </>
    )
  }
}

export default ActiveGroup