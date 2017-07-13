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
    this.handler = this.handler.bind(this)
  }
  handler(){
    if (!this.state.clicked){
      this.setState({clicked: true})
      store.dispatch(this.props.incrementChoicesMade())
      if (this.props.name === this.props.correctEmployeeName){
        this.setState({matchesCorrectPersonName: true})
        console.log(`${this.props.name} matches ${this.props.correctEmployeeName}`)
      }
      else {
        this.setState({matchesCorrectPersonName: false})
        console.log(`${this.props.name} DOESNT match ${this.props.correctEmployeeName}`)
      }
    }
  }
  render() {
    const image = `http:${this.props.image}`
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
    const style = {backgroundColor}
    console.log('style', style)
    return (
      <div className="col-md-2 ">
        <img style={style} className="img-responsive" src={image} onClick={this.handler} />
      </div>
    )
  }
}

const mapStateToProps = (storeState) => {
  return {
    correctEmployeeName: storeState.correctEmployeeName
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    incrementChoicesMade
  }
}

const PersonThumbnailContainer = connect(mapStateToProps, mapDispatchToProps)(PersonThumbnail)

export default PersonThumbnailContainer
