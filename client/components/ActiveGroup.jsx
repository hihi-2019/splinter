import React from 'react'
import { connect } from 'react-redux'
import Swal from 'sweetalert2'
import { apiDeleteGroup } from '../api/groups'
import { getGroupsByUser, setActiveGroupId } from '../actions/groups'

import { deleteAlertMessage, deleteConfirmMessage } from '../utils/alertMessages'

import AddTransaction from '../components/AddTransaction'
import ViewTransactions from '../components/ViewTransactions'


class ActiveGroup extends React.Component {
  constructor(props) {
    super(props)
    this.State ={
    
    }
  }

  

  deleteGroup = (event) => {
    let group_id = event.target.id
    Swal.fire(deleteAlertMessage).then((result) => {
      if (result.value) {
        apiDeleteGroup(group_id)
          .then(
            Swal.fire(deleteConfirmMessage))
        this.props.dispatch(getGroupsByUser(this.props.auth.user.user_id))
        this.props.dispatch(setActiveGroupId(''))

      }
    })
  }

  settleDebt = (event) => {
    let group_id = event.target.name
  }


  render() {
    let groups = this.props.groups.find(({ group_id }) => group_id == this.props.activeGroup)
    let members = this.props.groupMembers.filter(({ group_id }) => group_id == this.props.activeGroup)
    return (
      <>
        <div className="form-content animated fadeIn">
          {this.props.activeGroup ?
            <div className="animated fadeIn">
              {groups && <>
                <div className="row">
                  <div className="col-9">
                    <h1>{groups.group_name}</h1>
                    <p style={{ fontStyle: "italic" }}>{groups.group_description}</p>
                  </div>
                  <div className="col-3">
                    <button id={groups.group_id} name={groups.group_name} className="btn btn-danger" onClick={this.deleteGroup}>Delete {groups.group_name}</button>
                  </div>
                </div>
                <h3>Group Members</h3>
                <ul>
                  {members.map(member => {
                    let total = 0
                    this.props.transactions.filter(transaction => transaction.groupMember_id == member.groupMember_id).map(memberSpent => {
                      if(member.groupMember_id == memberSpent.groupMember_id){
                        if(memberSpent.total_contribution > 0){
                          console.log(member)
                          let numPeople = members.length
                          let percentage = (100 / numPeople) / 100
                          let payerDeduction = (memberSpent.total_contribution * percentage) / 100
                          return total += (memberSpent.total_contribution/100) - payerDeduction
                        }
                        return total += (memberSpent.total_contribution/100)
                      }
                    })
                    
                    return (
                      <li>{member.member_name} ${total}</li>
                    )
                  })}
                </ul>
                <hr></hr>

                {!groups.settled ? <div>< AddTransaction />  <hr></hr></div> : <div><h4>Not possible to add transactions to settled groups</h4></div>}
                < ViewTransactions />
                <hr></hr>

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
    auth: reduxState.auth,
    transactions: reduxState.transactions
  }
}

export default connect(mapStateToProps)(ActiveGroup)