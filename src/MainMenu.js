import React from 'react'
import {Link} from 'react-router'

class MainMenu extends React.Component {
  render () {
    return (
      <div>
        <ul>
          <li><Link to="/game"> Start a new game </Link></li>
          <li><Link to="/options"> Create custom game options </Link></li>
        </ul>
      </div>
    )
  }
}

export default MainMenu;
