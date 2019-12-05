import request from 'superagent'

const url = "/api/groups"


export function getGroupsByUser(id){
  return request
  .get(`api/groups/${id}`)
  .then(res=> res.body
  )
}

<<<<<<< HEAD
export function createNewGroup(groupData){
  return request
  .post(url)
  .then (res => res.text)
}
=======
export function apiGetGroupMembers(groupId){
  return request
  .get(`api/groups/members/${groupId}`)
  .then(res => res.body)
}
>>>>>>> f170fb8cd4c7c3a21b701a39e380cc4cbc0bdf82
