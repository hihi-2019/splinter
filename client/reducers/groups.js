const initialState = []

export default function saveGroupsByUser (state = initialState, action) {
  switch (action.type) {
    case 'SAVE_GROUPS_BY_USER':
      return  action.userDetails
<<<<<<< HEAD
    
      case 'CREATE_NEW_USER':
        return action.groupDetails
        
=======

    
>>>>>>> f170fb8cd4c7c3a21b701a39e380cc4cbc0bdf82
      default:
        return state
  }
}
