import React from 'react'
import DashboardNav from './DashboardNav'
import ActiveGroup from './ActiveGroup'
import CreateGroup from './CreateGroup'
import {connect} from 'react-redux'
import {getGroupMembers} from '../actions/groups'

class Dashboard extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <>
                <div className="content">
                    <div className="row">
                        <div classname="col-2">
                           <DashboardNav />
                        </div>
                        <div className="col-10 dashContent">
                            <CreateGroup />
                            <ActiveGroup />
                        </div>
                    </div>
                </div>
                
            </>
        )
    }
}

function mapStateToProps(reduxState){
    return {
        groups: reduxState.groups
    }
}

export default connect(mapStateToProps)(Dashboard)