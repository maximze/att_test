import actionTypes from "../utils/actionTypes";


function getInitialState() {
 return {
    usersList: [],
    user: null,
    loading: false
  }
}

const initialState = getInitialState();

export default function playlistReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_USERS:
      return {
        ...state,
        usersList: action.payload.sort((a, b) => {
          a = a.name;
          b = b.name;
          if (a < b) {
            return -1;
          }
          if (a > b) {
            return 1;
          }
          return 0;
        })
      }
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.payload
      }
    case actionTypes.SET_LOADING:
      return {
        ...state,
        loading: action.payload
      }
    default:
      return state
  }
}