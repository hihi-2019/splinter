import {apiSendEmail} from '../api/email'

export function sendEmail(emailAddress, groupName, total, name){
  apiSendEmail(emailAddress, groupName, total, name)
}