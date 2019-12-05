import { apiGetGroupMembers, apiCreateNewGroup, apiGetGroupsByUser } from '../api/groups'

export function saveGroupsByUser(groups) {
  return {
    type: 'SAVE_GROUPS_BY_USER',
    groups
  }
}

export function getGroupsByUser(user_id) {
  return dispatch => {
    apiGetGroupsByUser(user_id)
    .then((groups) => {
      dispatch(saveGroupsByUser(groups))
    })
    }
}


export function saveGroupMembers(members) {
  return {
    type: 'SAVE_GROUP_MEMBERS',
    members
  }
}

export function getGroupMembers(groupId) {
  return dispatch => {
    apiGetGroupMembers(groupId)
    .then((groupMembers) => {
      dispatch(saveGroupMembers(groupMembers))
    })
  }
}

export function createNewGroup(groupDetails) {
  return {
    type: 'CREATE_NEW_GROUP',
    groupDetails
  }
}

export function createNewGroupThunk(groupDetails) {
  return dispatch => {
    apiCreateNewGroup(groupDetails)
    .then(() => {
      dispatch(getGroupsByUser(groupDetails.user_id))
    })
  }
}

export function setActiveGroupId(group_id) {
  return{
    type: 'SET_ACTIVE_GROUP_ID',
    group_id
  }
}