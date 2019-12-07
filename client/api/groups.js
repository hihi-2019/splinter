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

export function apiGetGroupMembers(group_Id){
  return request
  .get(`api/groups/members/${group_Id}`)
  .then(res => res.body)
}

export function apiDeleteGroup(group_Id){
  return request
  .del(`api/groups/${group_Id}`)
  .then(res => res.body)
}