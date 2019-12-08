import React from 'react'
import { connect } from 'react-redux'
import { getTransactions, deleteTransactions } from '../actions/transactions'
import TransactionDetails from './TransactionDetails'
import Swal from 'sweetalert2';
import { deleteTransactionMessage, deleteTransactionConfirmMessage } from '../utils/alertMessages';

class ViewTransactions extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showTransactions: false,
      name: "",
    }
  }

  toggleTransaction = (e) => {
    this.setState({
      showTransactions: !this.state.showTransactions
    })
  }

  componentDidMount() {
    this.props.dispatch(getTransactions(Number(this.props.activeGroup[0])))
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
      this.setState({
        name: e.target.name,
        [e.target.name]: true
      })
    } else if (this.state[e.target.name] === true) {
      this.setState({
        [e.target.name]: false,
        name: e.target.name,
      })
    } else {
      this.setState({
        [e.target.name]: true,
        name: e.target.name,
      })
    }
  }

  handleDelete = (e) => {
    let id = e.target.id
    Swal.fire(deleteTransactionMessage).then((result) =>{
      if(result.value){
        this.props.dispatch(deleteTransactions(id, this.props.activeGroup))
      }
    })
    
  }


  render() {
    let selectedGroup = this.props.groups.find(group => group.group_id == this.props.activeGroup) 
    console.log(selectedGroup.settled)


    return (
      <>
        <h2 className="subTitle" onClick={this.toggleTransaction}>View All Transactions <i className="dashHeader fas fa-chevron-circle-down"></i></h2>
        {this.state.showTransactions && <div className="animated fadeIn">
        <table className="table">
          <thead>
            <tr>
              <th scope='col'>Description</th>
              <th scope='col'>Date</th>
              <th scope='col'>Transaction Total</th>
              <th scope='col'>Who Paid</th>
              {selectedGroup.settled == 0 && <th scope='col'>Delete</th>}
              
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
                    {selectedGroup.settled == 0 && <td><button onClick={this.handleDelete} id={payers.transaction_id} className='btn btn-danger'>Delete</button></td>}
                    
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
        </div>}
      </>
    )
  }
}

const mapStateToProps = (reduxState) => {
  return {
    groups: reduxState.groups,
    transactions: reduxState.transactions,
    groupMembers: reduxState.groupMembers,
    activeGroup: reduxState.activeGroup
  }
}

export default connect(mapStateToProps)(ViewTransactions)

