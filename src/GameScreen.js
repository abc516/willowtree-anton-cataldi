import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'

import store from './store'
import PersonThumbnailContainer from './PersonThumbnail'
import {resetChoicesMade} from './actions'

class GameScreen extends React.Component {
  render() {
    const choices = this.props.employeeChoices
    const guessesLeft = this.props.guessesLeft
    const correctName = this.props.correctName
    return (
      <div>
        {correctName
          ? <h1 className="page-header">Who is {correctName}</h1>
          : null
        }
        {guessesLeft
          ? <div className="row">
              {choices && choices.map((choice) => {
                const name = `${choice.firstName} ${choice.lastName}`
                const image = choice.headshot.url
                return (<PersonThumbnailContainer key={choice.id} name={name} image={image} />)
              })
              }
            </div>
          : <button onClick={this.props.resetGuessesMade} className="btn">
            <Link to="/game">
              Start a new game
            </Link>
          </button> // reset choicesMade on state}
        }
        <button onClick={this.props.resetGuessesMade} className="btn">
          <Link to="/options">Change Game Options</Link>
        </button>
      </div>
    )
  }
}

const mapStateToProps = (storeState) => {
  return {
    employeeChoices: storeState.employeeChoices,
    correctName: storeState.correctEmployeeName,
    guessesLeft: storeState.choicesPerRound - storeState.choicesMade
  }
}

const resetGuessesMade = () => {
  store.dispatch(resetChoicesMade())
}

const mapDispatchToProps = () => {
  return {resetGuessesMade}
}

const GameScreenContainer = connect(mapStateToProps, mapDispatchToProps)(GameScreen)

export default GameScreenContainer
