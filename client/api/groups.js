import request from 'superagent'

const url = "/api/groups"


export function getGroupsByUser(id){
  return request
  .get(`api/groups/${id}`)
  .then(res=> res.text
  )
}

export function createNewGroup(groupData){
  return request
  .post(url)
  .then (res => res.text)
}
