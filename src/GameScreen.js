import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import store from './store'
import PersonThumbnailContainer from './PersonThumbnail'
import {selectCorrectEmployeeName, resetChoicesMade} from './actions'

const pickRightEmployeeName = (chosenEmployees) => {
  console.log('chosen employees', chosenEmployees)
    const rightPersonIndex = Math.floor(Math.random() * 5)
    const rightPerson = chosenEmployees[rightPersonIndex]
    const rightPersonName = `${rightPerson.firstName} ${rightPerson.lastName}`
    return rightPersonName
}

class GameScreen extends React.Component {

  render () {
    const choices = this.props.employeeChoices
    const guessesLeft = this.props.guessesLeft
    if (choices.length){
      const correctName = pickRightEmployeeName(choices)
      this.props.selectRightEmployeeName(correctName)
    }
    return (
      guessesLeft ? <div className="row">
        {
          choices && choices.map((choice) => {
            const name = `${choice.firstName} ${choice.lastName}`
            const image = choice.headshot.url
            return (
              <PersonThumbnailContainer
                key={choice.id}
                name={name}
                image={image}
                />
            )
        })
      }
    </div> : <button onClick={this.props.resetGuessesMade}><Link to="/game"> Start a new game </Link></button> // reset choicesMade on state
    )
  }
}

const mapStateToProps = (storeState) => {
  return {
    employeeChoices: storeState.employeeChoices,
    guessesLeft: storeState.choicesPerRound - storeState.choicesMade
  }
}

const selectRightEmployeeName = (name) => {
  store.dispatch(selectCorrectEmployeeName(name))
}

const resetGuessesMade = () => {
  store.dispatch(resetChoicesMade())
}
const mapDispatchToProps = () => {
  return {
    selectRightEmployeeName,
    resetGuessesMade
  }
}


const GameScreenContainer = connect(mapStateToProps, mapDispatchToProps)(GameScreen)

export default GameScreenContainer
