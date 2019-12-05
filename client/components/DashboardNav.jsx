import React from 'react'
import { connect } from 'react-redux'


class DashboardNav extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        console.log(this.props.groups)
        return (
            <>
                <div className="DashboardNav">
                    <h5>Create New Group</h5>
                    <h5>Active Groups</h5>
                    <ul>
                        {this.props.groups.map((group, i) => {
                            if (!group.settled) {
                                return <li key={i}>{group.group_name}</li>
                            }
                        })}
                    </ul>
                    <h5>Settled Groups</h5>
                    <ul>
                        {this.props.groups.map((group, i) => {
                            if (group.settled) {
                                return <li key={i}>{group.group_name}</li>
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

        groups: reduxState.groups
    }
}

export default connect(mapStateToProps)(DashboardNav)