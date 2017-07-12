import React, { PropTypes } from 'react'

class OptionsScreen extends React.Component {
  render () {
    return (
      <div>
        <ul>
          <li> Hint Mode</li>
          <li> Reverse Mode</li>
          <li> Hard Mode</li>
          <li> Matt Mode</li>
          <button> Submit Options </button>
        </ul>
      </div>
    )
  }
}

export default OptionsScreen;
