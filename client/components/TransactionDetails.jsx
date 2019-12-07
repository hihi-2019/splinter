import React from 'react'
import { connect } from 'react-redux'


class TransactionDetails extends React.Component {

  getGroupMember = (id) => {
    return this.props.groupMembers.map(person => {
      if (person.groupMember_id == id) {
        return person.member_name
      }
    })
  }
  componentDidMount(){
    console.log('trans detail')
  }
  

  render() {
    console.log(this.props.name)
    return (

      <>
        {this.props.transactions.filter(transaction => transaction.transaction_name == this.props.name).map(debtors => {
          if (debtors.total_contribution < 0) {
            return (
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
  }
}

export default connect(mapStateToProps)(TransactionDetails)