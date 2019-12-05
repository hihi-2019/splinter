import {combineReducers} from 'redux'
import auth from './auth'
import groups from './groups'
import groupMembers from './groupMembers'

export default combineReducers({

  auth,
  groups,
  groupMembers

})