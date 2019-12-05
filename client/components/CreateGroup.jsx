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
      settled: false
    }
  }



  updateDetails = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      user_id: this.props.groups[0].user_id
    })
    // console.log(this.state)
  }

  submit = (e) => {
    e.preventDefault()
    console.log(this.state)
    // console.log('userid:', this.props.groups[0])
        console.log('about to send form data')
        this.props.dispatch(createNewGroupThunk(this.state))
  }

  onChange
  render() {
    return (
      <>
        <h3>Create a New Group</h3>
        <form>
          <label>Group Name</label>
          <input className='form-control' required type='text' name='group_name' placeholder='eg. Kates Birthday' onChange={this.updateDetails}></input>

          <label>Description</label>
          <input className='form-control' required type='text' name='group_description' placeholder='eg. Great Mates Drinking Crates To Celebrate Our Old Mates Birthdate' onChange={this.updateDetails}></input>
          <button onClick={this.submit}>
            Add Group
          </button>
        </form>
      </>
    )
  }
}

const mapStateToProps = (reduxState) => {
  return {
    auth : reduxState.auth,
    groups: reduxState.groups
  }
}




export default connect(mapStateToProps)(CreateGroup)