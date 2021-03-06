import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'

import store from './store'
import {enableMattMode, disableMattMode, enableHardMode, disableHardMode} from './actions'

class OptionsScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hardModeEnabled: false,
      mattModeEnabled: false
    }
    this.handleCheckboxEvent = this.handleCheckboxEvent.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleCheckboxEvent(event) {
    const target = event.target
    const value = target.checked
    const name = target.name
    this.setState({[name]: value})
  }

  handleSubmit(event) {
    const shouldEnableMattMode = this.state.mattModeEnabled
    const shouldEnableHardMode = this.state.hardModeEnabled
    shouldEnableMattMode
      ? this.props.enableMattModeOption()
      : this.props.disableMattModeOption()
    shouldEnableHardMode
      ? this.props.enableHardModeOption()
      : this.props.disableHardModeOption()
    event.preventDefault()
  }

  render() {
    const hardModeEnabled = this.state.hardModeEnabled
    const mattModeEnabled = this.state.mattModeEnabled
    return (
      <div>
        <h1 className="page-header">Choose which options you would like to enable for your game.</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="col-lg-6">
            <div className="input-group">
              <span className="input-group-addon">
                <input type="checkbox" onChange={this.handleCheckboxEvent} id="hardMode" name="hardModeEnabled" value={hardModeEnabled}/>
                <label htmlFor="hardMode">Hard Mode
                </label>
              </span>
            </div>
            <div className="input-group">
              <span className="input-group-addon">
                <input type="checkbox" onChange={this.handleCheckboxEvent} id="mattMode" name="mattModeEnabled" value={mattModeEnabled}/>
                <label htmlFor="mattMode">Matt Mode
                </label>
              </span>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="input-group">
              <span className="input-group-addon">
                <input type="submit" className="btn" id="submitOptions"/>
                <label htmlFor="submitOptions">Modify Game Options
                </label>
              </span>
            </div>
            <div className="input-group">
              <span className="input-group-addon">
                <button className="btn">
                  <Link to="/game">Start a New Game</Link>
                </button>
              </span>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

const enableMattModeOption = () => {
  store.dispatch(enableMattMode())
}

const disableMattModeOption = () => {
  store.dispatch(disableMattMode())
}

const enableHardModeOption = () => {
  store.dispatch(enableHardMode())
}

const disableHardModeOption = () => {
  store.dispatch(disableHardMode())
}

const mapDispatchToProps = () => {
  return {enableMattModeOption, disableMattModeOption, enableHardModeOption, disableHardModeOption}
}

const OptionsScreenContainer = connect(null, mapDispatchToProps)(OptionsScreen)

export default OptionsScreenContainer
