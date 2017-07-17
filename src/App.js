import React, { Component } from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import { Provider} from 'react-redux'
import axios from 'axios'

import store from './store'
import {getAllEmployees, selectFiveEmployees} from './actions'
import GameScreenContainer from './GameScreen'
import MainMenu from './MainMenu'
import OptionsScreen from './OptionsScreen'
import PersonThumbnail from './PersonThumbnail'
import Root from './Root'
import './App.css'

const selectFiveRandomEmployees = employees => {
  const our5 = []
  const pool = employees
  while (our5.length < 5) {
    const randomnumber = Math.ceil(Math.random() * 100)
    if (our5.indexOf(randomnumber) > -1) continue
    our5[our5.length] = pool[randomnumber]
  }
  return our5
}

const fetchAllEmployees = () => {
  axios.get('https://willowtreeapps.com/api/v1.0/profiles/')
    .then((response) => response.data.items)
    .then((employees) => store.dispatch(getAllEmployees(employees)))
}

const selectEmployees = () => {
  axios.get('https://willowtreeapps.com/api/v1.0/profiles/')
  .then((response) => response.data.items)
  .then((employees) => store.dispatch(getAllEmployees(employees)))
  .then(() => {
   const allEmployees = store.getState().allEmployees
   const fiveChosenEmployees = selectFiveRandomEmployees(allEmployees)
   store.dispatch(selectFiveEmployees(fiveChosenEmployees))
 })
  // const allEmployees = store.getState().allEmployees
  // const fiveChosenEmployees = selectFiveRandomEmployees(allEmployees)
  // store.dispatch(selectFiveEmployees(fiveChosenEmployees))
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          <Route path="/" component={Root} onEnter={fetchAllEmployees}>
            <Route path="/mainmenu" component={MainMenu} />
            <IndexRedirect to="/mainmenu" />
            <Route path="/options" component={OptionsScreen} />
            <Route path="/game" component={GameScreenContainer} onEnter={selectEmployees} />
            <Route path="/person" component={PersonThumbnail} />
          </Route>
        </Router>
      </Provider>
    )
  }
}

export default App;
