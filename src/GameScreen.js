import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'

import store from './store'
import PersonThumbnailContainer from './PersonThumbnail'
import {resetChoicesMade} from './actions'

const GameScreen = (props) => {

  const choices = props.employeeChoices
  const correctName = props.correctName
  return (correctName
    ? <div>
        <h1 className="page-header">Who is {correctName}</h1>
        <div className="row">
          {choices && choices.map((choice) => {
            const name = `${choice.firstName} ${choice.lastName}`
            const image = choice.headshot.url
            return (<PersonThumbnailContainer key={choice.id} name={name} image={image}/>)
          })
}
        </div>
        <button onClick={props.resetGuessesMade} title="Refresh page to play again!" className="btn">
          <Link to="/options">Change Game Options</Link>
        </button>
      </div>
    : null)
}

const mapStateToProps = (storeState) => {
  return {employeeChoices: storeState.employeeChoices, correctName: storeState.correctEmployeeName}
}

const resetGuessesMade = () => {
  store.dispatch(resetChoicesMade())
}

const mapDispatchToProps = () => {
  return {resetGuessesMade}
}

const GameScreenContainer = connect(mapStateToProps, mapDispatchToProps)(GameScreen)

export default GameScreenContainer
