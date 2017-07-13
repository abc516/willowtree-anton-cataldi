export const GET_ALL_EMPLOYEES = 'GET_ALL_EMPLOYEES'
export const SELECT_EMPLOYEE_CHOICES = 'SELECT_EMPLOYEE_CHOICES'
export const SELECT_CORRECT_EMPLOYEE_NAME = 'SELECT_CORRECT_EMPLOYEE_NAME'
export const INCREMENT_CHOICES_MADE = 'INCREMENT_CHOICES_MADE'

export const getAllEmployees = employees => ({
  type: GET_ALL_EMPLOYEES,
  allEmployees: employees
})

export const selectFiveEmployees = fiveEmployees => ({
  type: SELECT_EMPLOYEE_CHOICES,
  employeeChoices: fiveEmployees
})

export const selectCorrectEmployeeName = employeeName => ({
  type: SELECT_CORRECT_EMPLOYEE_NAME,
  correctEmployeeName: employeeName
})

export const incrementChoicesMade = () => ({
  type: INCREMENT_CHOICES_MADE
})
