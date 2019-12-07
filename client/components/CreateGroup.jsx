import React from 'react'
import { connect } from 'react-redux'
import { createNewGroupThunk } from '../actions/groups'

class CreateGroup extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      group_name: '',
      group_description: '',
      user_id: '',
      settled: false,
      members_names: [],
      new_member_name: ''
    }
  }

  updateMembers = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  addMember = (e) => {
    e.preventDefault()
    this.state.members_names.push(this.state.new_member_name)
    this.setState({
      new_member_name: ''
    })
  }

  updateDetails = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      user_id: this.props.auth.user.user_id
    })
  }

  submit = (e) => {
    e.preventDefault()
    this.props.dispatch(createNewGroupThunk(this.state))
  }

  deleteMember = (e) => {
    e.preventDefault()
    this.setState({
      members_names: this.state.members_names.filter(member => member !== e.target.name)
    })
  }

  render() {
    return (
      <>
        <div className="form-content">
          <h3>Create a New Group</h3>
          <form>
            <label>Group Name</label>
            <input className='form-control' required type='text' name='group_name' placeholder='eg. Kates Birthday' onChange={this.updateDetails}></input>

            <label>Description</label>
            <input className='form-control' required type='text' name='group_description' placeholder='eg. Great Mates Drinking Crates To Celebrate Our Old Mates Birthdate. Mate.' onChange={this.updateDetails}></input>


          <label>Add Group Member</label>
          <input className='form-control' required type='text' name='new_member_name' placeholder='eg. Joe' onChange={this.updateMembers} value={this.state.new_member_name}></input>
          <div>
          <button className="btn custom-button btn-sm" onClick={this.addMember}>Add member</button>
          </div>
          <ul> {this.state.members_names.map(member => {
          return <li>{member} <button className="btn btn-dark btn-sm"name={member} onClick={this.deleteMember}>x</button></li> 
          })}
          </ul>
          <button className="btn custom-button btn-lg" onClick={this.submit}>
            Create Group
          </button>
          </form>
        </div>
      </>
    )
  }
}

const mapStateToProps = (reduxState) => {
  return {
    auth: reduxState.auth,
    groups: reduxState.groups,
    groupMembers: reduxState.groupMembers
  }
}




export default connect(mapStateToProps)(CreateGroup)