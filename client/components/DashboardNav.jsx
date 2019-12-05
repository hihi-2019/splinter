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
                <div className="DashboardNav">
                    <h5>Create New Group</h5>
                    <h5>Active Groups</h5>
                    <ul>
                        {this.props.groups.map((group, i) => {
                            if (!group.settled) {
                                return <li key={i} id={group.group_id} onClick={this.changeGroup}>{group.group_name}</li>
                            }
                        })}
                    </ul>
                    <h5>Settled Groups</h5>
                    <ul>
                        {this.props.groups.map((group, i) => {
                            if (group.settled) {
                                return <li key={i} id={group.group_id} onClick={this.changeGroup}>{group.group_name}</li>
                            }
                        })}
                    </ul>
                </div>
            </>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return {

        groups: reduxState.groups,
        activeGroup: reduxState.group_id
    }
}

export default connect(mapStateToProps)(DashboardNav)