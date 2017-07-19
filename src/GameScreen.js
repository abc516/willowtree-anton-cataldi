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

const GameScreen = (props) => {
  const choices = props.employeeChoices
  const guessesLeft = props.guessesLeft
  let correctName
  if (choices.length) {
    correctName = pickRightEmployeeName(choices)
    props.selectRightEmployeeName(correctName)
  }
  return (
    <div>
      {correctName
        ? <h1>Who is {correctName}</h1>
        : null
      }
      {guessesLeft
        ? <div className="row">
            {choices && choices.map((choice) => {
              const name = `${choice.firstName} ${choice.lastName}`
              const image = choice.headshot.url
              return (<PersonThumbnailContainer key={choice.id} name={name} image={image}/>)
            })
            }
          </div>
        : <button onClick={props.resetGuessesMade} className="btn">
          <Link to="/game">
            Start a new game
          </Link>
        </button> // reset choicesMade on state}
      }
    <button className="btn"><Link to="/options">Change Game Options</Link></button>
    </div>
  )
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
  return {selectRightEmployeeName, resetGuessesMade}
}

const GameScreenContainer = connect(mapStateToProps, mapDispatchToProps)(GameScreen)

export default GameScreenContainer
