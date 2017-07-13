import initialState from './initialState'
import {
  GET_ALL_EMPLOYEES,
  SELECT_EMPLOYEE_CHOICES,
  SELECT_CORRECT_EMPLOYEE_NAME,
  INCREMENT_CHOICES_MADE
} from './actions'
const reducer = (state = initialState, action) => {
  const newState = Object.assign({}, state)

  switch (action.type) {
  case GET_ALL_EMPLOYEES:
    newState.allEmployees = action.allEmployees
    break;
  case SELECT_EMPLOYEE_CHOICES:
    newState.employeeChoices = action.employeeChoices
    break;
  case SELECT_CORRECT_EMPLOYEE_NAME:
    newState.correctEmployeeName = action.correctEmployeeName
    break;
  case INCREMENT_CHOICES_MADE:
    newState.choicesMade++
    break;
  default:
    return state
  }
  return newState
}

export default reducer
