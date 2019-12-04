import React from 'react'

class DashboardNav extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <>
                <div className="DashboardNav">
                    <h5>Create New Group</h5>
                    <h5>Active Groups</h5>
                    <ul>
                        <li>
                            Group1
                        </li>
                        <li>
                            Group2
                        </li>
                        <li>
                            Group3
                        </li>
                    </ul>
                    <h5>Settled Groups</h5>
                    <ul>
                        <li>
                            Group1
                        </li>
                        <li>
                            Group2
                        </li>
                        <li>
                            Group3
                        </li>
                    </ul>
                </div>
            </>
        )
    }
}

export default DashboardNav