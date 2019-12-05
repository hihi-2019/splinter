import React from 'react'

class CreateGroup extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <>
        <h3>Create a New Group</h3>
        
        <form>
        <label>Group Name</label>
          <input type='text' name='group_name' placeholder='eg. R&V NYE Crew'></input>

          <label>Description</label>
          <input type='text' name='group_description' placeholder='eg. Eight Great Mates Drinking Crates To Celebrate  '></input>

          <button type="submit">
            Add Transaction
          </button>

        </form>
      </>
    )
  }
}

export default CreateGroup