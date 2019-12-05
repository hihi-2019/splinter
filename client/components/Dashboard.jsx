import React from 'react'
import DashboardNav from './DashboardNav'
import ActiveGroup from './ActiveGroup'
import CreateGroup from './CreateGroup'

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

export default Dashboard