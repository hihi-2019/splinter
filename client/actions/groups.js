export function saveGroupsByUser(userDetails){
  return {
    type: 'SAVE_GROUPS_BY_USER',
    userDetails
  }
}

export function createNewGroup(groupDetails){
  return {
    type: 'CREATE_NEW_GROUP',
    groupDetails
  }
}