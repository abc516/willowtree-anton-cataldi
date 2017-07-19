import React from 'react'
import {connect} from 'react-redux'

import store from './store'
import {incrementChoicesMade} from './actions'

class PersonThumbnail extends React.Component  {
  constructor(props){
    super(props)
    this.state = {
      clicked: false,
      matchesCorrectPersonName: false
    }
    this.setClickedAndCheckGuess = this.setClickedAndCheckGuess.bind(this)
    this.chooseBackgroundColor = this.chooseBackgroundColor.bind(this)
  }
  setClickedAndCheckGuess(){
    if (!this.state.clicked){
      this.setState({clicked: true})
      store.dispatch(this.props.incrementChoicesMade())
      this.setState({matchesCorrectPersonName: this.props.name === this.props.correctEmployeeName})
    }
  }
  chooseBackgroundColor(){
    const clicked = this.state.clicked
    const matchesCorrectPersonName = this.state.matchesCorrectPersonName
    let backgroundColor
    if (!clicked){
      backgroundColor = 'tint-unclicked'//defaultColor
    }
    else {
      backgroundColor = matchesCorrectPersonName ? 'tint-correct' /*greenColor*/ : 'tint-incorrect'//redColor
    }
    return backgroundColor
  }
  render() {
    const backgroundColor = this.chooseBackgroundColor()
    const image = `http:${this.props.image}`
    const name = this.props.name
    const captionClass = this.state.clicked ? 'caption-clicked' : 'caption-unclicked'
    return (
      <div className="col-md-2 ">
        <figure className={backgroundColor}>
          <img className="img-responsive" src={image} onClick={this.setClickedAndCheckGuess} />
          <div className={captionClass}>{name}</div>
        </figure>
      </div>
    )
  }
}

const mapStateToProps = (storeState) => {
  return {
    correctEmployeeName: storeState.correctEmployeeName
  }
}

const mapDispatchToProps = () => {
  return {
    incrementChoicesMade
  }
}

const PersonThumbnailContainer = connect(mapStateToProps, mapDispatchToProps)(PersonThumbnail)

export default PersonThumbnailContainer
