import React from 'react'
import { connect } from 'react-redux'
import { newTransaction, deleteTransactions } from '../actions/transactions'

class AddTransaction extends React.Component {
  constructor(props) {
    super(props)
    let members = this.props.groupMembers.filter(({ group_id }) => group_id == this.props.activeGroup)
    this.state = {
      transaction: {},
      group_members: members,
      showTransactionForm: false,
      error: false,
      checked: true,
      selectedPayer: [],
      selectedPayee: []
    }
  }

  handleCheck = () => {
    if(this.state.checked){
      this.setState({
        checked: false,
        group_members: this.state.selectedPayer
      })
    } else{
      this.setState({
        checked: true,
        group_members: this.props.groupMembers.filter(({ group_id }) => group_id == this.props.activeGroup)
      })
    }
}
  handlePayerChange = (e) => {
    let members = this.props.groupMembers.filter(({ group_id }) => group_id == this.props.activeGroup)
    let selectedMem = members.filter(member => member.groupMember_id == e.target.value)
    this.setState({
      selectedPayer: selectedMem
    })
    selectedMem.map(selMember => {
      let count = 0
      this.state.group_members.map(member => {
        if(selMember.groupMember_id == member.groupMember_id){
          return count ++
        }
      })
      if(count ==0){
        this.state.group_members.push(selectedPayer[0])
      }
    })
  }

  updateDetails = (e) => {
    this.setState({
      transaction: {
        ...this.state.transaction,
        [e.target.name]: e.target.value,
        group_id: this.props.activeGroup,
      },
      

    })
  }

  handlePayees = (e) => {
    console.log('hello')
    let selectedPayee = this.props.groupMembers.filter(member => member.group_id == this.props.activeGroup && member.member_name == e.target.value)
    console.log(selectedPayee)
    this.setState({
      group_members: [...this.state.group_members, selectedPayee[0]]
    })
  }

  toggleTransaction = (e) => {
    this.setState({
      showTransactionForm: !this.state.showTransactionForm
    })
  }

  submit = (e) => {
    e.preventDefault()
   
    if (this.state.transaction.transactionName == "" || !this.state.transaction.groupMemberId ) {
      this.setState({
        error: true
      })
    } else {
      this.props.dispatch(newTransaction(this.state))
      this.setState({
        error: false
      })
    }



  }


  render() {
    let members = this.props.groupMembers.filter(({ group_id }) => group_id == this.props.activeGroup) 
   let splitMembers = members.filter(member => !this.state.group_members.includes(member))
    return (
      <>
        <div className="form-content">
          <h2 className="subTitle" onClick={this.toggleTransaction}>Add New Transaction <i className="dashHeader fas fa-chevron-circle-down"></i></h2>
          {this.state.showTransactionForm &&
            <div className="animated fadeIn">
              <form onSubmit={this.submit}>
                <label className="inputLabel" >Description</label>
                <input className='form-control' type='text' name='transactionName' placeholder="eg. Breakfast at Tiffany's" onChange={this.updateDetails}></input>
                <label className="inputLabel">Paid by</label>
                <select className='form-control' name='groupMemberId' onChange={this.updateDetails} onClick={this.handlePayerChange}>
                <option>Select Member</option>
                  {members.map((member, i) => {
                     
                    return <option value={member.groupMember_id} key={i}>{member.member_name}</option>
                  })}
                </select>
                <label className="inputLabel">Amount $</label>
                <input className='form-control' type='number' name='transactionTotal' placeholder='0.00' onChange={this.updateDetails} ></input>
                <div>
                  <label className="inputLabel">Split by all members?</label>
                  <input type='checkbox' name='membersOwing' checked={this.state.checked} onChange={this.handleCheck}></input>
                  {!this.state.checked &&
                  <>
                    <select onChange={this.handlePayees} >
                    <option selected='selected'>Select Member</option>
                      {splitMembers.map((member, i) => {
                          
                          return <option key={member.member_name} value={member.member_name}>{member.member_name}</option>
                        
                        
                      })}
                      
                    </select>
                    {/* <button onClick={this.handlePayees}>Add member</button> */}
                    {this.state.group_members.map((member, i) => {
                     
                  
                        
                        return <p>{member.member_name}</p>
                      
                      
                    })}
                    
                    </>
                  }
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
              {this.state.error == true && <p style={{ color: "red" }}>Please fill in all the details in the form</p>}
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