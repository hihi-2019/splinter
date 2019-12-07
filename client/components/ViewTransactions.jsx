import React from 'react'
import { connect } from 'react-redux'
import { getTransactions } from '../actions/transactions'
import TransactionDetails from './TransactionDetails'

class ViewTransactions extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // showDetails: false,
      name: "",
    }
  }
  componentDidMount() {
    this.props.dispatch(getTransactions(Number(this.props.activeGroup[0])))
    console.log('trans')

  }

  getGroupMember = (id) => {
    return this.props.groupMembers.map(person => {
      if (person.groupMember_id == id) {
        return person.member_name
      }
    })
  }

  handleClick = (e) => {
    e.preventDefault()
    if (this.state[e.target.name] === undefined) {
      console.log('undefined')
      this.setState({
        name: e.target.name,
        [e.target.name]: true
      })
    } else if (this.state[e.target.name] === true) {
      console.log('true')
      this.setState({
        [e.target.name]: false,
        name: e.target.name,
      })
    } else {
      console.log("false")
      this.setState({
        [e.target.name]: true,
        name: e.target.name,
      })
    }
    console.log(this.state)
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
              let date = new Date(payers.date * 1000)
              let dateString = date.toUTCString().slice(5, 22)
              let name = this.getGroupMember(payers.groupMember_id)
              return (
                <>
                  <tr>
                    <td><button className='btn custom-button' onClick={this.handleClick} name={payers.transaction_name}>{payers.transaction_name}</button></td>
                    <td>{dateString}</td>
                    <td>$ {payers.total_contribution / 100}</td>
                    <td>{name}</td>
                  </tr>
                  {this.state[payers.transaction_name] &&
                    this.state.name == payers.transaction_name &&
                    <TransactionDetails name={this.state.name} />
                  }
                </>
              )
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

