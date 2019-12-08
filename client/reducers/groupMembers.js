const initialState = []

export default function saveGroupsByUser (state = initialState, action) {
  switch (action.type) {
    case 'SAVE_GROUP_MEMBERS':
      return [...action.members, ...state]


      case'CLEAR_MEMBERS':
      return [action.members = []]
    
      default:
        return state
  }
}
