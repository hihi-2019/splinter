const initialState = []

export default function createNewTransaction (state = initialState, action) {
  switch (action.type) {
    case 'CREATE_NEW_TRANSACTION':
    return action.transactionData

    default:
        return state
  }
}