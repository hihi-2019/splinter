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
      console.log('groups:', groups)
      dispatch(saveGroupsByUser(groups))
    }).then((groups) => console.log(groups))
    }
}


export function saveGroupMembers(members) {
  return {
    type: 'SAVE_GROUP_MEMBERS',
    members
  }
}

export function getGroupMembers(groupId) {
  console.log("in GGM")
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
  console.log('inside createNewGroupThunk')
  return dispatch => {
    console.log('dispatching to apiCreateNewGroup')
    apiCreateNewGroup(groupDetails)
    .then(() => {
      dispatch(getGroupsByUser(groupDetails.user_id))
    })
  }
}