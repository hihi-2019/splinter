import request from 'superagent'

const url = "/api/groups"

export function getGroupsByUser(id){
  return request
  .get(url + id)
  .then(res => res.body)
}