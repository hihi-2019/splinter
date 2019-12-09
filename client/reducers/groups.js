const initialState = []

export default function groups (state = initialState, action) {
  switch (action.type) {
    case 'SAVE_GROUPS_BY_USER':
      return  action.groups
    
      case 'CREATE_NEW_GROUP':
        return action.groupDetails


      default:
        return state
  }
}

