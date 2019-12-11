import { saveUserToken } from '../utils/auth'
import { login } from '../api/auth'
import { apiGetGroupsByUser } from '../api/groups'
import { saveGroupsByUser } from '../actions/groups'

export function requestLogin() {
  return {
    type: 'LOGIN_REQUEST',
  }
}

export function receiveLogin(user) {
  return {
    type: 'LOGIN_SUCCESS',
    user
  }
}

export function loginError(message) {
  return {
    type: 'LOGIN_FAILURE',
    message
  }
}

export function loginUser(creds) {
  return dispatch => {
    dispatch(requestLogin(creds))
    return login(creds)
      .then((token) => {
        const userInfo = saveUserToken(token)
        dispatch(receiveLogin(userInfo))
        apiGetGroupsByUser(userInfo.user_id)
          .then(userData => {
            dispatch(
              saveGroupsByUser(userData)
            )
          })
        document.location = '/'
      })
      .catch(err => {
        dispatch(loginError(err.response.body.message))

      })
  }
}