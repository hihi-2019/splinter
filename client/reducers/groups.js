const initialState = []

export default function saveGroupsByUser (state = initialState, action) {
  switch (action.type) {
    case 'SAVE_GROUPS_BY_USER':
      return  action.userDetails
      default:
        return state
  }
}