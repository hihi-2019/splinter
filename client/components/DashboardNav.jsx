import React from 'react'
import { connect } from 'react-redux'
import { setActiveGroupId } from '../actions/groups'
import {getTransactions, getTransactionTotal} from '../actions/transactions'

class DashboardNav extends React.Component {
    constructor(props) {
        super(props)
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
                    <div className="dashNavHeader">
                        <h4>Active Groups</h4>
                        <ul className="dashNavList">
                            {this.props.groups.map((group, i) => {
                                if (!group.settled) {
                                    return <li className="dashNavListItem" key={i} id={group.group_id} onClick={this.changeGroup}>{group.group_name}</li>
                                }
                            })}
                        </ul>
                    </div>
                    <div className="dashNavHeader">
                        <h4>Settled Groups</h4>
                        <ul className="dashNavList">
                            {this.props.groups.map((group, i) => {
                                if (group.settled) {
                                    return <li className="dashNavListItem" key={i} id={group.group_id} onClick={this.changeGroup}>{group.group_name}</li>
                                }
                            })}
                        </ul>
                    </div>
                    <div className="dashNavHeader">
                        <div className="dashNavListItem" id='' onClick={this.changeGroup}>
                            <h4 >New group +</h4>
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