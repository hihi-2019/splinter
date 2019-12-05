import React from 'react'
import { connect } from 'react-redux'
import { newTransaction } from '../actions/transactions'

class AddTransaction extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      description: '',
      payer: '',
      amount: '',
      // membersOwing: '',
      // amountMembersOwing: ''
    }
  }

  componentDidMount() {
    console.log('did mount')
  }

  updateDetails = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
    console.log(this.state)
  }

  submit(e) {
    e.preventDefault()
  }

  render() {
    return (
      <>
        <h3>Add new transaction</h3>

        <form onSubmit={this.submit}>

          <label>Description</label>
          <input type='text' name='description' placeholder='eg. dinner' onChange={this.updateDetails}></input>

          <label>Paid by</label>
          <select name='payer' onChange={this.updateDetails}>
            <option></option>
            {this.props.groupMembers.map((groupMember, i) => {
              return <option key={i}>{groupMember.member_name}</option>
            })}
          </select>

          <label>Amount $</label>
          <input type='number' name='amount' placeholder='0.00' onChange={this.updateDetails}></input>

          <label>Split by all members?</label>
          <input type='checkbox' name='membersOwing' defaultChecked></input>

          <label>Split cost evenly?</label>
          <input type='checkbox' name='amountMembersOwing' defaultChecked></input>

          <button type="submit" onClick={() => this.props.dispatch(newTransaction(this.state))}>
            Add Transaction
          </button>

        </form>
      </>
    )
  }
}

const mapStateToProps = (reduxState) => {
  return {
    groupMembers: reduxState.groupMembers
  }
}

export default connect(mapStateToProps)(AddTransaction)