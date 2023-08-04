import React from 'react';
                            
const card = (props) => {
  return (
    <div className='card-1' style={{background : props.color}} onClick={props.onClick}>
        <h2>{props.category}</h2>
        <img className='img-2' src={props.src} alt="err" /> 
    </div>
  )
}

export default card