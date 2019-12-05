import {combineReducers} from 'redux'
import auth from './auth'
import groups from './groups'

export default combineReducers({

  auth,
  groups

})