import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import store from './store'
import {enableMattMode, disableMattMode, enableHardMode, disableHardMode} from './actions'

class OptionsScreen extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      hardModeEnabled: false,
      mattModeEnabled: false,
      hintModeEnabled: false,
      reverseModeEnabled: false
    }
    this.handleCheckboxEvent = this.handleCheckboxEvent.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleCheckboxEvent(event){
    const target = event.target
    const value = target.checked
    const name = target.name
    this.setState({
      [name]: value
    })
  }
  handleSubmit(event){
    const shouldEnableMattMode = this.state.mattModeEnabled
    const shouldEnableHardMode = this.state.hardModeEnabled
    shouldEnableMattMode ? this.props.enableMattModeOption() : this.props.disableMattModeOption()
    shouldEnableHardMode ? this.props.enableHardModeOption() : this.props.disableHardModeOption()
    event.preventDefault();
  }
  render () {
    const hintModeEnabled = this.state.hintModeEnabled
    const reverseModeEnabled = this.state.reverseModeEnabled
    const hardModeEnabled = this.state.hardModeEnabled
    const mattModeEnabled = this.state.mattModeEnabled
    return (
      <div>
        <h1>Choose which options you would like to enable for your game.</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="checkbox" id="hintMode" onChange={this.handleCheckboxEvent} name="hintModeEnabled" value={hintModeEnabled} />
          <label htmlFor="hintMode">Hint Mode?</label>
          <input type="checkbox" id="reverseMode" onChange={this.handleCheckboxEvent} name="reverseModeEnabled" value={reverseModeEnabled} />
          <label htmlFor="reverseMode">Reverse Mode?</label>
          <input type="checkbox" id="hardMode" onChange={this.handleCheckboxEvent} name="hardModeEnabled" value={hardModeEnabled} />
          <label htmlFor="hardMode">Hard Mode?</label>
          <input type="checkbox" id="mattMode" onChange={this.handleCheckboxEvent} name="mattModeEnabled" value={mattModeEnabled} />
          <label htmlFor="mattMode">Matt Mode?</label>
          <input type="submit" id="submitOptions" />
          <label htmlFor="submitOptions">Modify Game Options</label>
          <button><Link to="/game">Start a New Game</Link></button>
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
  return {
    enableMattModeOption,
    disableMattModeOption,
    enableHardModeOption,
    disableHardModeOption
  }
}


const OptionsScreenContainer = connect(null, mapDispatchToProps)(OptionsScreen)

export default OptionsScreenContainer
