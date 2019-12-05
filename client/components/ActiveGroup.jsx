import React from 'react'
import { connect } from 'react-redux'

import AddTransaction from '../components/AddTransaction'
import ViewTransactions from '../components/ViewTransactions'



class ActiveGroup extends React.Component {
  constructor(props) {
    super(props)

  }



  render() {
    let groups = this.props.groups.find(({ group_id }) => group_id == this.props.activeGroup)
    let members = this.props.groupMembers.filter(({ group_id }) => group_id == this.props.activeGroup)
    return (
      <>
        {this.props.activeGroup ?

          <div>
            {groups && <>
              <h1>{groups.group_name}</h1>
              <p>{groups.group_description}</p>

            </>}

            <h3>List of Group Members</h3>
            <ul>

            {members.map(member => { return (
              <li>{member.member_name}</li>
             ) })}

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
    activeGroup: reduxState.activeGroup,
    groupMembers: reduxState.groupMembers
  }
}

export default connect(mapStateToProps)(ActiveGroup)