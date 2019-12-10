import {apiSendEmail} from '../api/email'

export function sendEmail(emailAddress, groupName, total, name, memberTotals){
  apiSendEmail(emailAddress, groupName, total, name, memberTotals)
}