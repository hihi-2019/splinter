import React from 'react'
import { connect } from 'react-redux'
import Swal from 'sweetalert2'
import { apiDeleteGroup } from '../api/groups'
import { getGroupsByUser, setActiveGroupId, settleGroupThunk } from '../actions/groups'
import { sendEmail } from '../actions/email'

import { deleteAlertMessage, deleteConfirmMessage, settleGroupMessage, settleConfirmMessage } from '../utils/alertMessages'

import AddTransaction from '../components/AddTransaction'
import ViewTransactions from '../components/ViewTransactions'


class ActiveGroup extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showGroupMembers: true
    }
  }



  toggleGroupMembers = (e) => {
    this.setState({
      showGroupMembers: !this.state.showGroupMembers
    })
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

  

  settleDebt = (e) => {
  let groupName = e.target.value
  let group_id = e.target.name
  let total = this.props.transactionTotal
  let group_members = this.props.groupMembers.filter(member => member.group_id == this.props.activeGroup)
  
  let members_name = group_members.map((member) => {return member.member_name})



    Swal.fire(settleGroupMessage).then((result) => {
      if (result.value) {
        this.props.dispatch(settleGroupThunk(group_id, this.props.auth.user.user_id))
        Swal.fire(settleConfirmMessage)
        .then((result) => {
          if(result.value != undefined){
            this.props.dispatch(sendEmail(result.value, groupName, total, members_name))
          }
        })
      }
    })
  }



  render() {
    let groups = this.props.groups.find(({ group_id }) => group_id == this.props.activeGroup)
    let members = this.props.groupMembers.filter(({ group_id }) => group_id == this.props.activeGroup)
    return (
      <>
        <div className="form-content animated fadeIn">
          {this.props.activeGroup ?
            <div className="">
              {groups && <>

                <div className="">
                  <h1 className="activeGroupTitle">{groups.group_name}</h1>

                  <h3 className="activeGroupSubtitle" style={{ fontStyle: "italic" }}>{groups.group_description}</h3>
                  <h3>Total spend is ${this.props.transactionTotal.totalSpent ? this.props.transactionTotal.totalSpent / 100 : 0} </h3>

                </div>
                
                    {!groups.settled && <button name={groups.group_id} onClick={this.settleDebt} value={groups.group_name} className="settleGroup btn btn-outline-success btn-md">Settle Debts</button>}
                    <button id={groups.group_id} name={groups.group_name} className="settleGroup btn btn-outline-danger btn-md" onClick={this.deleteGroup}>Delete Group</button>
                 
                  
                <div >
                  <hr></hr>
                  <h2 onClick={this.toggleGroupMembers} className="subTitle">Group Members <i className="dashHeader fas fa-chevron-circle-down"></i></h2>
                  {this.state.showGroupMembers &&
                    <ul className="membersList animated fadeIn">
                      {members.map(member => {
                        let total = 0
                        this.props.transactions.filter(transaction => transaction.groupMember_id == member.groupMember_id).map(memberSpent => {
                         
                          if (member.groupMember_id == memberSpent.groupMember_id) {
                            if (memberSpent.total_contribution > 0) {
                              let numPeople = members.length
                              let percentage = (100 / numPeople) / 100
                              let payerDeduction = (memberSpent.total_contribution * percentage) / 100
                              return total += (memberSpent.total_contribution / 100) - payerDeduction
                            }
                            return  total += (memberSpent.total_contribution / 100)
                          }
                        })

                        return (
                          <li className="membersListItem"><p>{member.member_name}</p><p className="memberbalance" >${total}</p></li>
                        )
                      })}
                    </ul>}
                  <hr></hr>
                </div>

                {!groups.settled ? <div>< AddTransaction />  <hr></hr></div> : <div></div>}
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
    transactions: reduxState.transactions,
    transactionTotal: reduxState.transactionTotal
  }
}

export default connect(mapStateToProps)(ActiveGroup)


// let id = group_members.map(member => {return member.groupMember_id})

//     console.log("this one", id)

//    let trans =  id.map(i => this.props.transactions.filter(trans => trans.groupMember_id == i))
   
//    console.log("this one trans", trans)

    // let total = 0
    // this.props.transactions.filter(transaction => transaction.groupMember_id == member.groupMember_id).map(memberSpent => {
     
    //   if (member.groupMember_id == memberSpent.groupMember_id) {
    //     if (memberSpent.total_contribution > 0) {
    //       let numPeople = members.length
    //       let percentage = (100 / numPeople) / 100
    //       let payerDeduction = (memberSpent.total_contribution * percentage) / 100
    //       return total += (memberSpent.total_contribution / 100) - payerDeduction
    //     }
    //     return  total += (memberSpent.total_contribution / 100)
    //   }