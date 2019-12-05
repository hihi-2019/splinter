import React from 'react'
import { connect } from 'react-redux'
import { newTransaction } from '../actions/transactions'

class AddTransaction extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      transaction: {},
    }
  }

  updateDetails = (e) => {
    this.setState({
      transaction: {
        ...this.state.transaction,
        [e.target.name]: e.target.value,
        group_id: this.props.activeGroup
      } 
    })
  }

  submit = (e) => {
    e.preventDefault()
    this.props.dispatch(newTransaction(this.state.transaction))
  }

  render() {

    let members = this.props.groupMembers.filter(({ group_id }) => group_id == this.props.activeGroup)

    return (
      <>
        <h3>Add new transaction</h3>

        <form onSubmit={this.submit}>

          <label>Description</label>
          <input type='text' name='transactionName' placeholder='eg. dinner' onChange={this.updateDetails}></input>

          <label>Paid by</label>
          <select name='groupMemberId' onChange={this.updateDetails}>
            <option></option>
            {members.map((member, i) => {
              return <option value={member.groupMember_id} key={i}>{member.member_name}</option>
            })}
          </select>

          <label>Amount $</label>
          <input type='number' name='transactionTotal' placeholder='0.00' onChange={this.updateDetails}></input>

          <label>Split by all members?</label>
          <input type='checkbox' name='membersOwing' defaultChecked></input>

          <label>Split cost evenly?</label>
          <input type='checkbox' name='amountMembersOwing' defaultChecked></input>

          <button type="submit" onClick={this.submit}>
            Add Transaction
          </button>

        </form>
      </>
    )
  }
}

const mapStateToProps = (reduxState) => {
  return {
    groupMembers: reduxState.groupMembers,
    activeGroup: reduxState.activeGroup
  }
}

export default connect(mapStateToProps)(AddTransaction)