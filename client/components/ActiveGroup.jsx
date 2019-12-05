import React from 'react'
import {connect} from 'react-redux'

import AddTransaction from '../components/AddTransaction'
import ViewTransactions from '../components/ViewTransactions'
import { throwStatement } from '@babel/types'


class ActiveGroup extends React.Component {
  constructor(props) {
    super(props)
   
  }

  

  render() {

    return (
      <>
        {this.props.activeGroup ?
        <div>
          {/* <h1>{this.props.groups.find(group_id => group_id == this.props.activeGroup)}</h1> */}
          <h3>List of Group Members</h3>
          <ul>
            <li>
              MemberName MemberBalance $00.00
            </li>
          </ul>
          < AddTransaction />
          < ViewTransactions /> 
          </div>
        : <h1>Data Loading</h1>}

      </>
    )
  }
}

  const mapStateToProps = (reduxState) => {
    return {

      groups: reduxState.groups,
      activeGroup: reduxState.activeGroup
    }
  }

  export default connect(mapStateToProps)(ActiveGroup)