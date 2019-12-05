import React from 'react'
import {createNewGroup} from '../api/groups'
import {connect} from 'react-redux'

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
    })
    // console.log(this.state)
    console.log('props: ', this.props.groups)
  }

  submit(e) {
    e.preventDefault()
    console.log(this.props)
    this.setState({ 
      user_id: this.props[0].user_id 
  })
    console.log(this.state)
    this.props.dispatch(createNewGroup(this.state))
    .then(() => {
      // this.props.history.push('/')
    })
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

const mapStateToProps = ({ groups }) => {
  return { groups }
}

export default connect(mapStateToProps)(CreateGroup)