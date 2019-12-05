const initialState = []

export default function groups (state = initialState, action) {
  switch (action.type) {
   
      case 'SET_ACTIVE_GROUP_ID':
        return action.group_id
      
      default:
        return state
  }
}
