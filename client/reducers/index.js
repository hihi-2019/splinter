import {combineReducers} from 'redux'
import auth from './auth'
import groups from './groups'
import groupMembers from './groupMembers'
import activeGroup from './activeGroup'
import transactions from './transactions'
import transactionTotal from './transactionTotal'

export default combineReducers({

  auth,
  groups,
  groupMembers,
  activeGroup,
  transactions,
  transactionTotal
})