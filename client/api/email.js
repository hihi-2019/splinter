import request from 'superagent'

const url = "/api/email"


export function apiSendEmail(emailAddress){
  return request
  .post(url)
  .send(emailAddress)
  .then(res=> res.body)
}