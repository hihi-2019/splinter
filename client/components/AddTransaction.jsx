import React from 'react'
import { connect } from 'react-redux'
import { newTransaction } from '../actions/transactions'

class AddTransaction extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      transaction: {},
      // description: '',
      // payer: '',
      // amount: '',
      // membersOwing: '',
      // amountMembersOwing: ''
    }
  }

  componentDidMount() {
    console.log('did mount')
  }

  updateDetails = (e) => {
    this.setState({
      transaction: {
        ...this.state.transaction,
        [e.target.name]: e.target.value
      } 

    })
    console.log(this.state)
  }

  submit(e) {
    e.preventDefault()
    //get group_id and groupmemberid from redux state and add it to transaction
    this.props.dispatch(newTransaction(this.state.transaction))
  }

  render() {
    return (
      <>
        <h3>Add new transaction</h3>

        <form onSubmit={this.submit}>

          <label>Description</label>
          <input type='text' name='transactionName' placeholder='eg. dinner' onChange={this.updateDetails}></input>

          <label>Paid by</label>
          <select name='groupMemberId' onChange={this.updateDetails}>
            <option></option>
            {this.props.groupMembers.map((groupMember, i) => {
              return <option key={i}>{groupMember.member_name}</option>
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