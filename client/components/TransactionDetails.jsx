import React from 'react'
import { connect } from 'react-redux'


class TransactionDetails extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      display: []
    }
  }


  

  getGroupMember = (id) => {
    return this.props.groupMembers.map(person => {
      if (person.groupMember_id == id) {
        return person.member_name
      }
    })
  }
<<<<<<< HEAD


=======
>>>>>>> 66774ba26a27acca0e85e97f3398a81afe147e73

  render() {
    return (

      <>
<<<<<<< HEAD
        {this.props.transactions.filter(transaction => transaction.transaction_name == this.props.name).map((debtors, i) => {
          if (debtors.total_contribution < 0) {
            return (
              <ul>
                <li key={i}>{this.getGroupMember(debtors.groupMember_id)} owes {name}  $ {(debtors.total_contribution / 100) * -1}</li>
              </ul>
            )
          }
        })
=======
        {this.props.transactions.filter(transaction => transaction.transaction_name == this.props.name)
          .map((debtors, i) => {
            if (debtors.total_contribution < 0) {
              return (
                <ul key={i}>
                  <li>{this.getGroupMember(debtors.groupMember_id)} owes {name}  $ {(debtors.total_contribution / 100) * -1}</li>
                </ul>
              )
            }
          })
>>>>>>> 66774ba26a27acca0e85e97f3398a81afe147e73
        }
      </>
    )
  }
}

const mapStateToProps = (reduxState) => {
  return {
    transactions: reduxState.transactions,
    groupMembers: reduxState.groupMembers,
  }
}

export default connect(mapStateToProps)(TransactionDetails)