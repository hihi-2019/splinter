import React from 'react'
import { connect } from 'react-redux'
import {getTransactions} from '../actions/transactions'

class ViewTransactions extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount(){
    this.props.dispatch(getTransactions(1))
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
         </tr>
       </thead>
     <tbody>
     {this.props.transactions.map(transaction => {
       let date = new Date(transaction.date * 1000)
       let dateString = date.toUTCString().slice(5, 22)
       return(
         <tr>
      
         <td><h5>{transaction.transaction_name}</h5></td>
         <td>{dateString}</td>
         <td>{transaction.transaction_total}</td>
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
    transactions: reduxState.transactions
  }
}

export default connect(mapStateToProps)(ViewTransactions)

