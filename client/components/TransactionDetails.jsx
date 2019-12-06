import React from 'react'
import { connect } from 'react-redux'
import { getTransactions } from '../actions/transactions'

class TransactionDetails extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showDetails: false
    }
  }
  componentDidMount() {
    // this.props.dispatch(getTransactions(Number(this.props.activeGroup[0])))
    console.log(this.props.name)
  }

  getGroupMember = (id) => {
    return this.props.groupMembers.map(person => {
      if(person.groupMember_id == id){
        return person.member_name
      }
    })
  }

  handleClick = (e) => {
    console.log(e.target)
    if(this.state.showDetails === false){
      this.setState({
        showDetails: true,       
      })
    } else{
      this.setState({
        showDetails: false
      })
    }
    
  }

  render() {
    return (
  
      <>
      {this.props.transactions.filter(transaction => transaction.transaction_name == this.props.name).map(debtors => {
          if(debtors.total_contribution < 0){
            return(
              <ul>
                <li>{this.getGroupMember(debtors.groupMember_id)} owes {name}  $ {(debtors.total_contribution / 100) * -1}</li>
              </ul>
            )
          }
        })
      }
      </>
    )
  }
}

const mapStateToProps = (reduxState) => {
  return {
    transactions: reduxState.transactions,
    groupMembers: reduxState.groupMembers,
    activeGroup: reduxState.activeGroup
  }
}

export default connect(mapStateToProps)(TransactionDetails)