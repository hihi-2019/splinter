const initialState = []

export default function createNewTransaction (state = initialState, action) {
  switch (action.type) {
    case 'CREATE_NEW_TRANSACTION':
      return [...state, action.transactionData]

    case 'GET_TRANSACTIONS':
      return action.transactions

    default:
        return state
  }
}

