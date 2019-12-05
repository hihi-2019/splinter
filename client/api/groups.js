import request from 'superagent'

const url = "/api/groups"


export function apiGetGroupsByUser(user_id){
  return request
  .get(`api/groups/${user_id}`)
  .then(res=> res.body
  )
}

export function apiCreateNewGroup(groupData){
  return request 
  .post(url)
  .send(groupData)
  .then (res => res.body)
}

export function apiGetGroupMembers(groupId){
  return request
  .get(`api/groups/members/${groupId}`)
  .then(res => res.body)
}
