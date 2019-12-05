const initialState = []

export default function groups (state = initialState, action) {
  switch (action.type) {
   
      case 'SET_ACTIVE_GROUP_ID':
          console.log(action.group_id)
        return action.group_id
      
      default:
        return state
  }
}
