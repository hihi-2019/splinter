import {apiGetGroupMembers} from '../api/groups'

export function saveGroupsByUser(userDetails){
  return {
    type: 'SAVE_GROUPS_BY_USER',
    userDetails
  }
}

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
  }
}