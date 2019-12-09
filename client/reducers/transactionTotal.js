const initialState = []

export default function setTransactionTotal (state = initialState, action) {
  switch (action.type) {

    case 'SAVE_TRANSACTION_TOTAL':
        return action.total

    default:
        return state
  }
}

