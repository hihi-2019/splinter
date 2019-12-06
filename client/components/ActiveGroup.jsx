import React from 'react'
import { connect } from 'react-redux'
import Swal from 'sweetalert2'
import { apiDeleteGroup } from '../api/groups'
import {getGroupsByUser, setActiveGroupId} from '../actions/groups'

import {deleteAlertMessage, deleteConfirmMessage} from '../utils/alertMessages'

import AddTransaction from '../components/AddTransaction'
import ViewTransactions from '../components/ViewTransactions'


class ActiveGroup extends React.Component {
  constructor(props) {
    super(props)
  }
  
  deleteGroup = (event) => {
    let group_id = event.target.id
    Swal.fire(deleteAlertMessage).then((result) => {
      if (result.value) {
        apiDeleteGroup(group_id)
          .then(
            Swal.fire(deleteConfirmMessage))
          this.props.dispatch(getGroupsByUser(this.props.auth.user.user_id))
          .then(this.props.dispatch(setActiveGroupId()))

        }
      })
    
  }


  render() {
    let groups = this.props.groups.find(({ group_id }) => group_id == this.props.activeGroup)
    let members = this.props.groupMembers.filter(({ group_id }) => group_id == this.props.activeGroup)
    return (
      <>
        <div className="form-content">
          {this.props.activeGroup ?
            <div>
              {groups && <>
                <h1>{groups.group_name}</h1>
                <p style={{ fontStyle: "italic" }}>{groups.group_description}</p>
                <h3>Group Members</h3>
                <ul>
                  {members.map(member => {
                    return (
                      <li>{member.member_name}</li>
                    )
                  })}
                </ul>
                {!groups.settled ? <div>< AddTransaction /></div> : <div><h4>Not possible to add transactions to settled groups</h4></div>}
                < ViewTransactions />
                <button id={groups.group_id} className="btn custom-button btn-lge" onClick={this.settleDebt}>Settle Group</button>
                <button id={groups.group_id} className="btn btn-warning" onClick={this.editGroup}>Edit Group</button>
                <button id={groups.group_id} className="btn btn-danger" onClick={this.deleteGroup}>Delete Group</button>
              </>}
            </div>
            : <h1>Error, group data not found</h1>}
        </div>
      </>
    )
  }
}

const mapStateToProps = (reduxState) => {
  return {
    groups: reduxState.groups,
    activeGroup: reduxState.activeGroup,
    groupMembers: reduxState.groupMembers,
    auth: reduxState.auth
  }
}

export default connect(mapStateToProps)(ActiveGroup)