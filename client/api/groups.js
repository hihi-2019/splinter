import request from 'superagent'

const url = "/api/groups"


export function getGroupsByUser(id){
  return request
  .get(`api/groups/${id}`)
  .then(res=> res.text
  )
}

