import initialState from './initialState'
import {
  GET_ALL_EMPLOYEES,
  SELECT_EMPLOYEE_CHOICES,
  SELECT_CORRECT_EMPLOYEE_NAME,
  INCREMENT_CHOICES_MADE,
  RESET_CHOICES_MADE,
  ENABLE_MATT_MODE,
  DISABLE_MATT_MODE,
  ENABLE_HARD_MODE,
  DISABLE_HARD_MODE
} from './actions'

const reducer = (state = initialState, action) => {
  const newState = Object.assign({}, state)

  switch (action.type) {
    case GET_ALL_EMPLOYEES:
      newState.allEmployees = action.allEmployees
      break
    case SELECT_EMPLOYEE_CHOICES:
      newState.employeeChoices = action.employeeChoices
      break
    case SELECT_CORRECT_EMPLOYEE_NAME:
      newState.correctEmployeeName = action.correctEmployeeName
      break
    case INCREMENT_CHOICES_MADE:
      newState.choicesMade++
        break
    case RESET_CHOICES_MADE:
      newState.choicesMade = 0
      break
    case ENABLE_MATT_MODE:
      newState.mattModeEnabled = true
      break
    case DISABLE_MATT_MODE:
      newState.mattModeEnabled = false
      break
    case ENABLE_HARD_MODE:
      newState.choicesPerRound = 1
      break
    case DISABLE_HARD_MODE:
      newState.choicesPerRound = 5
      break
    default:
      return state
  }
  return newState
}

export default reducer
