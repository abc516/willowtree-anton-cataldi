import React, { Component } from 'react'
import {Router, Route, Redirect, browserHistory} from 'react-router'
import {connect, Provider} from 'react-redux'
import axios from 'axios'
import store from './store'
import {getAllEmployees} from './actions'

import GameScreen from './GameScreen'
import MainMenu from './MainMenu'
import OptionsScreen from './OptionsScreen'
import PersonThumbnail from './PersonThumbnail'
import './App.css'

const fetchAllEmployees = nextRouterState => {
  axios.get('https://willowtreeapps.com/api/v1.0/profiles/')
    .then((response) => response.data.items)
    .then((employees) => store.dispatch(getAllEmployees(employees)))
}

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/main" component={MainMenu} onEnter={fetchAllEmployees} />
            <Redirect from ="/" to="/main" />
            <Route path="/options" component={OptionsScreen} />
            <Route path="/game" component={GameScreen} />
            <Route path="/person" component={PersonThumbnail} />
        </Router>
      </Provider>
    )
  }
}

export default App;
