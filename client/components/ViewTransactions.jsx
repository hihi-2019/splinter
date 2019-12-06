import React from 'react'
import { connect } from 'react-redux'
import { getTransactions } from '../actions/transactions'

class ViewTransactions extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {
    this.props.dispatch(getTransactions(Number(this.props.activeGroup[0])))
  }

  getGroupMember = (id) => {
    return this.props.groupMembers.map(person => {
      if(person.groupMember_id == id){
        return person.member_name
      }
    })
  }

  render() {
    return (
      <>
        <h3>View all transactions</h3>
        <table className="table">
          <thead>
            <tr>
              <th scope='col'>Description</th>
              <th scope='col'>Date</th>
              <th scope='col'>Transaction Total</th>
              <th scope='col'>Who Paid</th>
            </tr>
          </thead>
          <tbody>
            {this.props.transactions.filter(transaction => transaction.total_contribution > 0).map(payers => {
              console.log(payers)
              let date = new Date(payers.date * 1000)
              let dateString = date.toUTCString().slice(5, 22)
              let name = this.getGroupMember(payers.groupMember_id)
              console.log(name)
              return (
                <tr>
                  <td>{payers.transaction_name}</td>
                  <td>{dateString}</td>
                  <td>$ {payers.total_contribution / 100}</td>
                  <td>{name}</td>
                </tr>)
              })
            }
          </tbody>
        </table>

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

export default connect(mapStateToProps)(ViewTransactions)

