import React from 'react'

const PersonThumbnail = (props) => {
  const image = `http:${props.image}`
  const handler = props.onClick
  const name = props.name
  console.log('handler', handler)
  return (
    <div className="col-md-2 ">
      <h1> Heading to fill...</h1>
      <img className="img-responsive" src={image} onClick={handler} value={name} />
    </div>
  )
}

export default PersonThumbnail
