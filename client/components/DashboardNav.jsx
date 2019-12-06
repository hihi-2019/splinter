import React from 'react'
import { connect } from 'react-redux'
import {setActiveGroupId} from '../actions/groups'

class DashboardNav extends React.Component {
    constructor(props) {
        super(props)
      
    }

    changeGroup = (event) => {
        this.props.dispatch(setActiveGroupId(event.target.id))
    }

    render() {
        return (
            <>
                <div className="dashboardNav">
                    
                    <h3>Active Groups</h3>
                    <ul className="dashNavGroups">
                        {this.props.groups.map((group, i) => {
                            if (!group.settled) {
                                return <li className="dashLink" key={i} id={group.group_id} onClick={this.changeGroup}>{group.group_name}</li>
                            }
                        })}
                    </ul>
                    <h3>Settled Groups</h3>
                    <ul className="dashNavGroups">
                        {this.props.groups.map((group, i) => {
                            if (group.settled) {
                                return <li className="dashLink" key={i} id={group.group_id} onClick={this.changeGroup}>{group.group_name}</li>
                            }
                        })}
                    </ul>
                    <div className="dashLink" id='' onClick={this.changeGroup}>
                    <h3 >New Group +</h3>
                    </div>
                </div>
            </>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return {

        groups: reduxState.groups,
        activeGroup: reduxState.activeGroup
    }
}

export default connect(mapStateToProps)(DashboardNav)