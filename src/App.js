import React, { Component } from 'react'
import {Router, Route, Redirect, browserHistory} from 'react-router'
import GameScreen from './GameScreen'
import MainMenu from './MainMenu'
import OptionsScreen from './OptionsScreen'
import PersonThumbnail from './PersonThumbnail'
import './App.css'

class App extends Component {

  render() {
    return (
      <Router history={browserHistory}>
          <Route path="/main" component={MainMenu} />
          <Redirect from ="/" to="/main" />
          <Route path="/options" component={OptionsScreen} />
          <Route path="/game" component={GameScreen} />
          <Route path="/person" component={PersonThumbnail} />
      </Router>
    )
  }
}

export default App;
