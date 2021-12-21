import actionTypes from "../utils/actionTypes";

export function setUsers(users) {
  return {
    type: actionTypes.SET_USERS,
    payload: users
  }
}

export function setUser(user) {
  return {
    type: actionTypes.SET_USER,
    payload: user
  }
}
export function setLoading(value){
  return {
    type: actionTypes.SET_LOADING,
    payload: value
  }
}