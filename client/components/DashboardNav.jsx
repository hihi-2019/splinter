import React from 'react'
import { connect } from 'react-redux'
import { setActiveGroupId } from '../actions/groups'
import { getTransactions } from '../actions/transactions'

class DashboardNav extends React.Component {
    constructor(props) {
        super(props)

    }

    changeGroup = (event) => {
        this.props.dispatch(setActiveGroupId(event.target.id))
        this.props.dispatch(getTransactions(event.target.id))
    }

    render() {
        return (
            <>
                <div className="dashboardNav animated fadeIn">
                    <div className="dashNavHeader">
                        <h4>Your Active Groups</h4>
                        <ul className="dashNavGroups">
                            {this.props.groups.map((group, i) => {
                                if (!group.settled) {
                                    return <li className="dashLink" key={i} id={group.group_id} onClick={this.changeGroup}>{group.group_name}</li>
                                }
                            })}
                        </ul>
                    </div>
                    <div className="dashNavHeader">
                        <h4>Your Settled Groups</h4>
                        <ul className="dashNavGroups">
                            {this.props.groups.map((group, i) => {
                                if (group.settled) {
                                    return <li className="dashLink" key={i} id={group.group_id} onClick={this.changeGroup}>{group.group_name}</li>
                                }
                            })}
                        </ul>
                    </div>
                    <div className="dashNavHeader">
                        <div className="dashLink" id='' onClick={this.changeGroup}>
                            <h4 >Create New Group +</h4>
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
        transactions: reduxState.transactions
    }
}

export default connect(mapStateToProps)(DashboardNav)