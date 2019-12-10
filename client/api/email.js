import request from 'superagent'

const url = "/api/email"


export function apiSendEmail(emailAddress, groupName, total, name, membersTotals){
  return request
  .post(url)
  .send({email: emailAddress,
  group: groupName, totalSpend: total, members: name, membersTotal: membersTotals})
  .then(res=> res.body)
}