import React from 'react'

const label = ({category, remove})=> {
  return (
    <>
    <button className='btn-2'>
        <span>{category}</span> 
        <span onClick={remove}>&#x2715;</span>
    </button>
    </>
  )
}

export default label;