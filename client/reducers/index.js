import {combineReducers} from 'redux'
import auth from './auth'
import groups from './groups'
import groupMembers from './groupMembers'
import activeGroup from './activeGroup'

export default combineReducers({

  auth,
  groups,
  groupMembers,
  activeGroup

})