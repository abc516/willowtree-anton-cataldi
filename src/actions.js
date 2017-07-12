export const GET_ALL_EMPLOYEES = 'GET_ALL_EMPLOYEES'

export const getAllEmployees = (employees) => ({
  type: GET_ALL_EMPLOYEES,
  allEmployees: employees
})
