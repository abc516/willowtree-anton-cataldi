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
      console.log(`Does ${this.props.name} match ${this.props.correctEmployeeName}?: ${this.state.matchesCorrectPersonName}`)
    }
  }
  chooseBackgroundColor(){
    const clicked = this.state.clicked
    const matchesCorrectPersonName = this.state.matchesCorrectPersonName
    const redColor = '#FF0000'
    const greenColor = '##90EE90'
    const defaultColor = '#FFFFFF'
    console.log('clicked: ', clicked, 'matchesCorrectPersonName: ', matchesCorrectPersonName)
    let backgroundColor
    if (!clicked){
      backgroundColor = defaultColor
    }
    else {
      backgroundColor = matchesCorrectPersonName ? greenColor : redColor
    }
    return backgroundColor
  }
  render() {
    const backgroundColor = this.chooseBackgroundColor()
    const image = `http:${this.props.image}`
    const style = {backgroundColor}
    console.log('style', style)
    return (
      <div className="col-md-2 ">
        <img style={style} className="img-responsive" src={image} onClick={this.setClickedAndCheckGuess} />
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
