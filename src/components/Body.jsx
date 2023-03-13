import React from 'react'

function Body(props) {
  return (
    <div className='body'>
        <div>
      <h1 className='contact'>{props.contact}</h1> 
      <h2 className='num'>Number : {props.number} </h2> 
       <h2 className='num'>Address: {props.address}</h2> 
      
      </div>
    </div>
  )
}

export default Body
