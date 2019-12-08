import React from 'react'
import DashboardNav from './DashboardNav'
import ActiveGroup from './ActiveGroup'
import CreateGroup from './CreateGroup'
import {connect} from 'react-redux'
// import {getGroupMembers} from '../actions/groups'

class Dashboard extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <>
                <div className="content">
                    <div className="row">
                        <div className="col-lg-2 col-md-3 col-sm-12">
                           <DashboardNav />
                        </div>
                        <div className="col-lg-10 col-md-9 col-sm-12 dashContent">
                            {this.props.activeGroup.length == 0 && <CreateGroup/>}
                            {this.props.activeGroup.length > 0 && <ActiveGroup/>}
                            
                        </div>
                    </div>
                </div>
                
            </>
        )
    }
}

function mapStateToProps(reduxState){
    return {
        groups: reduxState.groups,
        activeGroup: reduxState.activeGroup
    }
}

export default connect(mapStateToProps)(Dashboard)