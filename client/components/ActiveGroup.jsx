import React from 'react'
import { connect } from 'react-redux'

import AddTransaction from '../components/AddTransaction'
import ViewTransactions from '../components/ViewTransactions'



class ActiveGroup extends React.Component {
  constructor(props) {
    super(props)

  }


  render() {
    let groups = this.props.groups.find(({ group_id }) => group_id == this.props.activeGroup)
    let members = this.props.groupMembers.filter(({ group_id }) => group_id == this.props.activeGroup)
    return (
      <>
        <div className="form-content">
          {this.props.activeGroup ?

            <div>
              {groups && <>
                <h1>{groups.group_name}</h1>
                <p style={{ fontStyle: "italic" }}>{groups.group_description}</p>



                <h3>Group Members</h3>
                <ul>

                  {members.map(member => {
                    return (
                      <li>{member.member_name}</li>
                    )
                  })}

                </ul>

                {!groups.settled ? <div>< AddTransaction /></div> : <div><h4>Not possible to add transactions to settled groups</h4></div>}
                < ViewTransactions />
              </>}
            </div>
            : <h1>Data Loading</h1>}
        </div>
      </>
    )
  }
}

const mapStateToProps = (reduxState) => {
  return {

    groups: reduxState.groups,
    activeGroup: reduxState.activeGroup,
    groupMembers: reduxState.groupMembers
  }
}

export default connect(mapStateToProps)(ActiveGroup)