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
            <DashboardNav/>
            <CreateGroup/>
            <ActiveGroup/>
            </>
        )
    }
}

export default Dashboard