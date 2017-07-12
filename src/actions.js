export const GET_ALL_EMPLOYEES = 'GET_ALL_EMPLOYEES'

export const SELECT_EMPLOYEE_CHOICES = 'SELECT_EMPLOYEE_CHOICES'

export const getAllEmployees = (employees) => ({
  type: GET_ALL_EMPLOYEES,
  allEmployees: employees
})

export const selectFiveEmployees = (fiveEmployees) => ({
  type: SELECT_EMPLOYEE_CHOICES,
  employeeChoices: fiveEmployees
})
