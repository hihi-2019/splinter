import React from 'react'

class CreateGroup extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        group_name: '',
        group_description: ''
    }
  }

  updateDetails = (e) => {
    this.setState({ 
        [e.target.name]: e.target.value 
    })
  }

  submit(e) {
    e.preventDefault()
    let { group_name, group_description} = this.state
    this.props.dispatch(createGroup({group_name, group_description}))
    .then(() => {
      this.props.history.push('/')
    })
  }

  onChange 
  render() {
    return (
      <>
        <h3>Create a New Group</h3>
        <form>
        <label>Group Name</label>
          <input className='form-control' required type='text' name='group_name' placeholder='eg. R&V NYE Crew' onChange={this.updateDetails}></input>

          <label>Description</label>
          <input className='form-control' required type='text' name='group_description' placeholder='eg. Eight Great Mates Drinking Crates To Celebrate New Years 2020' onChange={this.updateDetails}></input>
          <button type="submit">
            Add Group
          </button>
        </form>
      </>
    )
  }
}

export default CreateGroup