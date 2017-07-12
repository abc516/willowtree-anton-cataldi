import React from 'react'
import {connect} from 'react-redux'
import store from './store'
import PersonThumbnail from './PersonThumbnail'

class GameScreen extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount() {

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
              <PersonThumbnail
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

function mapStateToProps(storeState) {
  return {
    employeeChoices: storeState.employeeChoices
  }
}

const GameScreenContainer = connect(mapStateToProps)(GameScreen)

export default GameScreenContainer
