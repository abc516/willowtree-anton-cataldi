import initialState from './initialState'
import {GET_ALL_EMPLOYEES, SELECT_EMPLOYEE_CHOICES} from './actions'
const reducer = (state = initialState, action) => {
  const newState = Object.assign({}, state)

  switch (action.type) {
  case GET_ALL_EMPLOYEES:
    newState.allEmployees = action.allEmployees
    break;
  case SELECT_EMPLOYEE_CHOICES:
    newState.employeeChoices = action.employeeChoices
    break;
  default:
    return state
  }
  return newState
}

export default reducer
