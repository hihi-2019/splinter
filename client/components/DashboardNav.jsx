import React from 'react'
import { connect } from 'react-redux'
import { setActiveGroupId } from '../actions/groups'
import {getTransactions, getTransactionTotal} from '../actions/transactions'

class DashboardNav extends React.Component {
    constructor(props) {
        super(props)

        this.state={
            toggleActiveGroups:true,
            toggleSettledGroups:true
        }
    }

    toggleActive = (e) => {
        this.setState({
          toggleActiveGroups: !this.state.toggleActiveGroups
        })
      }

      toggleSettled = (e) => {
        this.setState({
          toggleSettledGroups: !this.state.toggleSettledGroups
        })
      }

    changeGroup = (event) => {
        this.props.dispatch(setActiveGroupId(event.target.id))
        this.props.dispatch(getTransactions(event.target.id))
        this.props.dispatch(getTransactionTotal(event.target.id))
    }

    render() {
        return (
            <>
                <div className="dashboardNav">
                    <div >
                        <h4 className="dashNavHeader" onClick={this.toggleActive}>Active Groups <i className="fas fa-chevron-circle-down"></i></h4>
                        {this.state.toggleActiveGroups && <ul className="dashNavList animated fadeIn">
                            {this.props.groups.map((group, i) => {
                                if (!group.settled) {
                                    return <li className="dashNavListItem" key={i} id={group.group_id} onClick={this.changeGroup}>{group.group_name}</li>
                                }
                            })}
                        </ul>}
                    </div>
                    <div >
                        <h4 className="dashNavHeader" onClick={this.toggleSettled}>Settled Groups <i className="fas fa-chevron-circle-down"></i></h4>
                        {this.state.toggleSettledGroups && <ul className="dashNavList animated fadeIn">
                            {this.props.groups.map((group, i) => {
                                if (group.settled) {
                                    return <li className="dashNavListItem" key={i} id={group.group_id} onClick={this.changeGroup}>{group.group_name}</li>
                                }
                            })}
                        </ul>}
                    </div>
                    <div >
                        <div className="dashNavListItem" id='' onClick={this.changeGroup}>
                            <h4 className="dashNavHeader" >New Group <i class="fas fa-plus-circle"></i></h4>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return {

        groups: reduxState.groups,
        activeGroup: reduxState.activeGroup,
        transactions: reduxState.transactions,
        transactionTotal: reduxState.tra
    }
}

export default connect(mapStateToProps)(DashboardNav)