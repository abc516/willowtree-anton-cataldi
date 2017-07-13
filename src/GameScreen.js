import React from 'react'
import {connect} from 'react-redux'
import store from './store'
import PersonThumbnailContainer from './PersonThumbnail'
import {selectCorrectEmployeeName} from './actions'

const pickRightEmployeeName = (chosenEmployees) => {
    const rightPersonIndex = Math.floor(Math.random() * 5)
    const rightPerson = chosenEmployees[rightPersonIndex]
    const rightPersonName = `${rightPerson.firstName} ${rightPerson.lastName}`
    return rightPersonName
}

class GameScreen extends React.Component {
  componentDidMount() {
    const correctName = pickRightEmployeeName(this.props.employeeChoices)
    this.props.selectRightEmployeeName(correctName)
  }

  render () {
    const choices = this.props.employeeChoices
    return (
      <div className="row">
        {
          choices && choices.map((choice, idx) => {
            const name = `${choice.firstName} ${choice.lastName}`
            const image = choice.headshot.url
            return (
              <PersonThumbnailContainer
                key={choice.id}
                idx={idx}
                name={name}
                image={image}
                onClick={this.personThumbnailHandler}
                />
            )
        })
      }
      </div>
    )
  }
}

const mapStateToProps = (storeState) => {
  return {
    employeeChoices: storeState.employeeChoices
  }
}
const selectRightEmployeeName = (name) => {
  store.dispatch(selectCorrectEmployeeName(name))
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectRightEmployeeName
  }
}

const GameScreenContainer = connect(mapStateToProps, mapDispatchToProps)(GameScreen)

export default GameScreenContainer
