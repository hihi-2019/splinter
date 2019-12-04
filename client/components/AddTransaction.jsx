import React from 'react'

class AddTransaction extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <>
        <h3>Add new transaction</h3>
        
        <form>

          <label>Description</label>
          <input type='text' name='description' placeholder='eg. dinner'></input>

          <label>Paid by</label>
          <select name='payer'>
            <option></option>
            <option>Member Names</option>
          </select>

          <label>Amount $</label>
          <input type='number' name='amount' placeholder='0.00'></input>

          <label>Split by all members?</label>
          <input type='checkbox' name='membersOwing' checked></input>

          <label>Split cost evenly?</label>
          <input type='checkbox' name='membersOwing' checked></input>

          <button type="submit">
            Add Transaction
          </button>

        </form>
      </>
    )
  }
}

export default AddTransaction