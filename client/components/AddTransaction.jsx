import React from 'react'
import { connect } from 'react-redux'
import { newTransaction, deleteTransactions } from '../actions/transactions'

class AddTransaction extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      transaction: {},
      group_members: [],
      showTransactionForm: false
    }
  }

  updateDetails = (e) => {
    this.setState({
      group_members: this.props.groupMembers.filter(({ group_id }) => group_id == this.props.activeGroup)
    })

    this.setState({
      transaction: {
        ...this.state.transaction,
        [e.target.name]: e.target.value,
        group_id: this.props.activeGroup,

      }
    })
  }

  toggleTransaction = (e) => {
    this.setState({
      showTransactionForm: !this.state.showTransactionForm
    })
  }

  submit = (e) => {
    e.preventDefault()
    this.props.dispatch(newTransaction(this.state))
  }

 
  render() {

    let members = this.props.groupMembers.filter(({ group_id }) => group_id == this.props.activeGroup)

    return (
      <>
        <div className="form-content">
          <h2 className="subTitle" onClick={this.toggleTransaction}>Add New Transaction <i className="dashHeader fas fa-chevron-circle-down"></i></h2> 
          {this.state.showTransactionForm && 
          <div className="animated fadeIn">
            <form className="form" onSubmit={this.submit}>
              <label className="inputLabel">Description</label>
              <input className='form-control' type='text' name='transactionName' placeholder="eg. Breakfast at Tiffany's" onChange={this.updateDetails}></input>
              <label className="inputLabel">Paid by</label>
              <select className='form-control' name='groupMemberId' onChange={this.updateDetails}>
                <option></option>
                {members.map((member, i) => {
                  return <option value={member.groupMember_id} key={i}>{member.member_name}</option>
                })}
              </select>
              <label className="inputLabel">Amount $</label>
              <input className='form-control' type='number' name='transactionTotal' placeholder='0.00' onChange={this.updateDetails}></input>
              <div>
                <label className="inputLabel">Split by all members?</label>
                <input type='checkbox' name='membersOwing' defaultChecked></input>
              </div>
              <div>
                <label className="inputLabel">Split cost evenly?</label>
                <input type='checkbox' name='amountMembersOwing' defaultChecked></input>
              </div>
              <div>
                <button className="btn custom-button btn-lg" type="submit" onClick={this.submit}>
                  Add Transaction
              </button>
              </div>
            </form>
          </div>}

        </div>
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