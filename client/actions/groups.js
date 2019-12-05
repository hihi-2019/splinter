import { apiGetGroupMembers, apiCreateNewGroup } from '../api/groups'

export function saveGroupsByUser(userDetails) {
  return {
    type: 'SAVE_GROUPS_BY_USER',
    userDetails
  }
}

export function createNewGroup(groupDetails) {
  return {
    type: 'CREATE_NEW_GROUP',
    groupDetails
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

export function createNewGroupThunk(groupDetails) {
  console.log('inside createNewGroupThunk')
  return dispatch => {
    console.log('dispatching to apiCreateNewGroup')
    apiCreateNewGroup(groupDetails)
    .then((newGroup) => {
      console.log('dispatching to createNewGroup')
      dispatch(createNewGroup(newGroup))
    })
  }
}