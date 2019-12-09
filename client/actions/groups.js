import { apiGetGroupMembers, apiCreateNewGroup, apiGetGroupsByUser, apiSettleGroup } from '../api/groups'

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
    dispatch(clearGroupMembers())
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
      .then((res) => {
        dispatch(getGroupsByUser(groupDetails.user_id))
        return res
      })
      .then(res => {
        let group_id = JSON.stringify(res[0])
        dispatch(setActiveGroupId(group_id))
      })
  }
}

export function setActiveGroupId(group_id) {
  return {
    type: 'SET_ACTIVE_GROUP_ID',
    group_id
  }
}

export function clearGroupMembers() {
  return {
    type: "CLEAR_MEMBERS",
  }
}

export function settleGroupThunk(group_id, user_id) {
  return dispatch => {
    apiSettleGroup(group_id)
      .then((res) => {
        dispatch(getGroupsByUser(user_id))
        return res
      })
      .then(res => {
        dispatch(setActiveGroupId(group_id))
      })
  }
}

export function initialiseThunk(user_id) {
  console.log('intialise thunk got triggered')
  return dispatch => {
    apiGetGroupsByUser(user_id)
      .then((groups) => {
        console.log(groups)
        dispatch(saveGroupsByUser(groups))
      })
  }
  
  // console.log(groups)
    // .then((groups) => {
    //   groups.map(group => {
    //     console.log(group)
    //     getGroupMembers(group.group_id)
    //   })
    // })
}
