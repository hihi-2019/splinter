import React from 'react'

class AddTransaction extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <>
        <h3>Add a New Transaction</h3>
        
        <form>

          <label>Description</label>
          <input type='text'></input>

          <label>Paid by</label>
          <input type='text'></input>

          <label>Amount $</label>
          <input type='number'></input>

          <label>Split by all members?</label>
          <input type='radio' checked></input>

          <button type="submit">
            Add Transaction
          </button>

        </form>
      </>
    )
  }
}

export default AddTransaction