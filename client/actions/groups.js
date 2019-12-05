import {apiGetGroupMembers} from '../api/groups'

export function saveGroupsByUser(userDetails){
  return {
    type: 'SAVE_GROUPS_BY_USER',
    userDetails
  }
}

<<<<<<< HEAD
export function createNewGroup(groupDetails){
  return {
    type: 'CREATE_NEW_GROUP',
    groupDetails
=======
export function saveGroupMembers(members) {
  return {
   type: 'SAVE_GROUP_MEMBERS',
   members
}

}

export function getGroupMembers(groupId){
  return dispatch => {
    apiGetGroupMembers(groupId)
    .then((groupMembers) => {
    dispatch(saveGroupMembers(groupMembers))
    })
>>>>>>> f170fb8cd4c7c3a21b701a39e380cc4cbc0bdf82
  }
}