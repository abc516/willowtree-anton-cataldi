import initialState from './initialState'
import {GET_ALL_EMPLOYEES} from './actions'
const reducer = (state = initialState, action) => {
  const newState = Object.assign({}, state)

  switch (action.type) {
  case GET_ALL_EMPLOYEES:
    newState.allEmployees = action.allEmployees
    break;
  default:
    return state
  }
  return newState
}

export default reducer
