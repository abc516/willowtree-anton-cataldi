import React from 'react'

//This Component acts as a wrapper for main program
const Root = (props) => {
  return (
    <div>
      {props.children}
    </div>
  )
}

export default Root
