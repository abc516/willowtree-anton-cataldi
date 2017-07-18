import React from 'react'
import {Link} from 'react-router'

const MainMenu = () => {
  return (
    <div>
      <ul className="list-group">
        <li className="list-group-item"><Link to="/game"> Start a new game </Link></li>
        <li className="list-group-item"><Link to="/options"> Create custom game options </Link></li>
      </ul>
    </div>
  )
}

export default MainMenu;
