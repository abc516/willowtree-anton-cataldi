import React from 'react'
import {Router, Route, Redirect, browserHistory} from 'react-router'
import { Provider} from 'react-redux'
import axios from 'axios'

import store from './store'
import {getAllEmployees, selectFiveEmployees, selectCorrectEmployeeName} from './actions'
import GameScreenContainer from './GameScreen'
import MainMenu from './MainMenu'
import OptionsScreenContainer from './OptionsScreen'
import PersonThumbnail from './PersonThumbnail'

const selectMatts = employees => {
  return employees.filter((employee) => employee.firstName.includes('Matt'))
}

const selectFiveRandomEmployees = employees => {
  const our5 = []
  const pool = employees
  //Durstenfeld Shuffle Algorithm
  for (let i = pool.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = pool[i];
    pool[i] = pool[j];
    pool[j] = temp;
  }
  //pick the first five employees after shuffling
  for (let i = 0; i < 5; i++){
    our5.push(pool[i])
  }
  return our5
}

const pickRightEmployeeName = (chosenEmployees) => {
  const rightPersonIndex = Math.floor(Math.random() * 5)
  const rightPerson = chosenEmployees[rightPersonIndex]
  const rightPersonName = `${rightPerson.firstName} ${rightPerson.lastName}`
  return rightPersonName
}

//retreives all employees from API endpoint, selects Five at Random, chooses one
const selectEmployees = () => {
  axios.get('https://willowtreeapps.com/api/v1.0/profiles/')
  .then((response) => response.data.items)
  .then((employees) => store.dispatch(getAllEmployees(employees)))
  .then(() => {
   const allEmployees = store.getState().allEmployees
   //use following line to filter array for Matt Mode
   const allEmployeesFiltered = store.getState().mattModeEnabled
   ? selectMatts(allEmployees) : allEmployees
   const fiveChosenEmployees = selectFiveRandomEmployees(allEmployeesFiltered)
   store.dispatch(selectFiveEmployees(fiveChosenEmployees))
 })
 .then(() => {
   const employeeChoices = store.getState().employeeChoices
   const rightEmployeeName = pickRightEmployeeName(employeeChoices)
   store.dispatch(selectCorrectEmployeeName(rightEmployeeName))
 })
}

const App = () => {
  return (
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/mainmenu" component={MainMenu} />
        <Redirect from="/" to="/mainmenu" />
        <Route path="/options" component={OptionsScreenContainer} />
        <Route path="/game" component={GameScreenContainer} onEnter={selectEmployees} />
        <Route path="/person" component={PersonThumbnail} />
      </Router>
    </Provider>
  )
}

export default App;
