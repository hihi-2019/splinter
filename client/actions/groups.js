export function saveGroupsByUser(userDetails){
  return {
    type: 'SAVE_GROUPS_BY_USER',
    userDetails
  }
}